import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import PageHead from '@components/PageHead/PageHead'
import PageNavigation from '@components/PageNavigation/PageNavigation'
import PageTitle from '@components/PageTitle/PageTitle'
import PageWrap from '@components/PageWrap/PageWrap'
import UnauthenticatedContent from '@components/UnauthenticatedContent/UnauthenticatedContent'
import WorksMain from '@components/WorksMain/WorksMain'
import WorksMeta from '@components/WorksMeta/WorksMeta'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import { getWorks } from '@libs/microcms'
import { authOptions } from '@pages/api/auth/[...nextauth]'
import type { CustomWorksResponse } from '@type/WorksType'
import GetPageDataFromPageDataList from '@utils/getPageDataFromPageDataList'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'

import styles from './index.module.scss'

type Props = {
  data: CustomWorksResponse
}

export const Works = ({ data }: Props) => {
  const { title, description } = GetPageDataFromPageDataList('news')

  const { data: session, status } = useSession()
  console.log({ session, status })

  // if (status === 'loading') return <div>Loading...</div>

  return (
    <Layout>
      <NextSeo description={description} openGraph={{ title, description }} title={title} />
      <main>
        <Container>
          <Spacer>
            <MainContainer>
              <PageWrap>
                <PageHead>
                  <div className={styles.head}>
                    <PageTitle addClassName={styles.title} title="全ての実績一覧" />
                    {status === 'authenticated' && <WorksMeta data={data} />}
                  </div>
                </PageHead>

                {status === 'authenticated' ? (
                  <div className={styles.main}>
                    <WorksMain data={data} />
                  </div>
                ) : (
                  <UnauthenticatedContent />
                )}

                <PageNavigation link="/" title="TOPへ" />
                <Breadcrumbs
                  lists={[
                    {
                      title: 'TOP'
                    },
                    {
                      title: '実績一覧'
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

export default Works

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context
  // next-authでログインしているか確認
  const session = await getServerSession(req, res, authOptions)

  // ログインしていない場合は空のデータを返す
  if (!session) {
    return { props: {} }
  }

  // 実績一覧取得（開示案件のみ取得）
  const data = await getWorks({ isDisclosure: false })

  return {
    props: {
      data
    }
  }
}
