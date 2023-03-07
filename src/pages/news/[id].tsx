// import { Inter } from 'next/font/google'

import NewsDetail from '@components/NewsDetail/NewsDetail'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import type { NewsResponse, NewsType } from '@type/NewsType'

import { getNews } from '@/libs/microcms'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  id: string
  detailData: NewsType
  newsResponseData: NewsResponse
}

export const Index = ({ id, detailData, newsResponseData }: Props) => {
  return (
    <Layout pageName="top">
      <main>
        <Container>
          <Spacer>
            <MainContainer isPaddingMinimal={true}>
              <NewsDetail detailData={detailData} id={id} newsResponseData={newsResponseData} />
            </MainContainer>
          </Spacer>
        </Container>
      </main>
    </Layout>
  )
}

export default Index

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

  return {
    props: {
      id,
      detailData,
      newsResponseData
    }
  }
}
