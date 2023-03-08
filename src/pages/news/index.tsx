import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import NewsList from '@components/NewsList/NewsList'
import PageHead from '@components/PageHead/PageHead'
import PageNavigation from '@components/PageNavigation/PageNavigation'
import PageTitle from '@components/PageTitle/PageTitle'
import PageWrap from '@components/PageWrap/PageWrap'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import { getNews } from '@libs/microcms'
import type { NewsResponse } from '@type/NewsType'
import GetPageDataFromPageDataList from '@utils/getPageDataFromPageDataList'
import { NextSeo } from 'next-seo'

import styles from './index.module.scss'

type Props = {
  data: NewsResponse
}

export const News = ({ data }: Props) => {
  const { title, description } = GetPageDataFromPageDataList('news')

  return (
    <Layout>
      <NextSeo description={description} openGraph={{ title, description }} title={title} />
      <main>
        <Container>
          <Spacer>
            <MainContainer>
              <PageWrap addGapStyle={false}>
                <PageHead>
                  <PageTitle addClassName={styles.title} title="お知らせ" />
                </PageHead>
                <div className={styles.inner}>
                  <NewsList data={data} />
                  <PageNavigation link="/" title="TOPへ" />
                </div>
                <Breadcrumbs
                  lists={[
                    {
                      title: 'TOP'
                    },
                    {
                      title: 'お知らせ'
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

export default News

export const getStaticProps = async () => {
  // お知らせ覧取得
  const data = await getNews()

  return {
    props: {
      data
    }
  }
}
