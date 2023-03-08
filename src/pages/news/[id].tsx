import ArticleBody from '@components/ArticleBody/ArticleBody'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import PageHead from '@components/PageHead/PageHead'
import PageMeta from '@components/PageMeta/PageMeta'
import PageNavigation from '@components/PageNavigation/PageNavigation'
import PageTitle from '@components/PageTitle/PageTitle'
import PageWrap from '@components/PageWrap/PageWrap'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import { getNews } from '@libs/microcms'
import { MarkdownToHtml } from '@modules/markdownToHtml'
import type { NewsResponse, NewsType } from '@type/NewsType'
import { NextSeo } from 'next-seo'

type Props = {
  id: string
  detailData: NewsType
  newsResponseData: NewsResponse
}

export const NewsDetail = ({ id, detailData, newsResponseData }: Props) => {
  // お知らせ一覧からidを元に前後のコンテンツを取得
  const index = newsResponseData.contents.findIndex((content) => content.id === id)
  const prev = newsResponseData.contents[index - 1] || {}
  const next = newsResponseData.contents[index + 1] || {}

  const title = detailData.title
  const description = 'お知らせの詳細ページです。'

  return (
    <Layout>
      <NextSeo description={description} openGraph={{ title, description }} title={title} />
      <main>
        <Container>
          <Spacer>
            <MainContainer>
              <PageWrap>
                <PageHead>
                  <PageTitle title={detailData.title} />
                  <PageMeta pageType="article" publishedAt={detailData.publishedAt} updatedAt={detailData.updatedAt} />
                </PageHead>
                <ArticleBody content={detailData.content} />
                <PageNavigation link="/news/" nextLink={next.id} prevLink={prev.id} title="お知らせ一覧へ" />
                <Breadcrumbs
                  lists={[
                    {
                      title: 'TOP'
                    },
                    {
                      title: 'お知らせ',
                      path: '/news/'
                    },
                    {
                      title: detailData.title
                    }
                  ]}
                />
              </PageWrap>
            </MainContainer>
          </Spacer>
        </Container>
      </main>
    </Layout>
  )
}

export default NewsDetail

type Params = {
  params: {
    id: string
  }
}

export const getStaticPaths = async () => {
  // お知らせ一覧取得
  const newsResponseData = await getNews()

  const paths = newsResponseData.contents.map((content) => `/news/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: Params) => {
  console.log(params)

  const id = params?.id!

  // お知らせ覧取得
  const newsResponseData = await getNews()

  // newsResponseDataからidを元に詳細データを取得
  const detailData = newsResponseData.contents.find((content) => content.id === id)

  // detailDataのcontentをHTMLに変換
  const content = await MarkdownToHtml(detailData?.content || '')

  return {
    props: {
      id,
      detailData: {
        ...detailData,
        content
      },
      newsResponseData
    }
  }
}
