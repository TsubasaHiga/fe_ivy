// import { Inter } from 'next/font/google'

import About from '@components/About/About'
import KV from '@components/KV/KV'
import News from '@components/News/News'
import Possible from '@components/Possible/Possible'
import Works from '@components/Works/Works'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import type { NewsResponse } from '@type/NewsType'
import type { WorksResponse } from '@type/WorksType'

import { getNews, getWorks } from '@/libs/microcms'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  worksData: WorksResponse
  newsData: NewsResponse
}

export const Index = ({ worksData, newsData }: Props) => {
  return (
    <Layout pageName="top">
      <main>
        <Container>
          <KV />
          <Spacer>
            <MainContainer>
              <About />
              <Possible />
              <Works data={worksData} />
              <News data={newsData} />
            </MainContainer>
          </Spacer>
        </Container>
      </main>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  // 実績一覧取得（開示案件のみ取得）
  const worksData = await getWorks({ isDisclosure: true })
  // お知らせ覧取得
  const newsData = await getNews({ limit: 3 })

  return {
    props: {
      worksData,
      newsData
    }
  }
}
