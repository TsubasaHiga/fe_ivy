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
import { getAllPages, getPageBySlug } from '@libs/pages'
import { MarkdownToHtml } from '@modules/markdownToHtml'
import type { PageType } from '@type/PageType'
import { NextSeo } from 'next-seo'

type Props = {
  pageData: PageType
}

export const Page = ({ pageData }: Props) => {
  const title = pageData.title
  const description = pageData.description

  return (
    <Layout>
      <NextSeo description={description} openGraph={{ title, description }} title={title} />
      <main>
        <Container>
          <Spacer>
            <MainContainer>
              <PageWrap>
                <PageHead>
                  <PageTitle title={pageData.title} />
                  <PageMeta pageType="fixed" publishedAt={pageData.publishedAt} updatedAt={pageData.updatedAt} />
                </PageHead>
                <ArticleBody content={pageData.content} />
                <PageNavigation link="/" title="TOPへ" />
                <Breadcrumbs
                  lists={[
                    {
                      title: 'TOP'
                    },
                    {
                      title: pageData.title
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

export default Page

type Params = {
  params: {
    slug: string
  }
}

export const getStaticPaths = async () => {
  // お知らせ一覧取得
  const allPages = await getAllPages()

  const paths = allPages.map((page) => `/pages/${page.slug}`)

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: Params) => {
  const data = getPageBySlug(params.slug)
  const content = await MarkdownToHtml(data.content || '')
  const pageData = {
    ...data,
    content
  }

  return {
    props: {
      pageData
    }
  }
}
