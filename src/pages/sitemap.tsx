import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import PageHead from '@components/PageHead/PageHead'
import PageNavigation from '@components/PageNavigation/PageNavigation'
import PageTitle from '@components/PageTitle/PageTitle'
import PageWrap from '@components/PageWrap/PageWrap'
import SitemapList from '@components/SitemapList/SitemapList'
import { links } from '@const/values'
import Container from '@layouts/Container/Container'
import Layout from '@layouts/Layout/Layout'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Spacer from '@layouts/Spacer/Spacer'
import GetPageDataFromPageDataList from '@utils/getPageDataFromPageDataList'
import { NextSeo } from 'next-seo'

export const Sitemap = () => {
  const { title, description } = GetPageDataFromPageDataList('sitemap')

  return (
    <Layout>
      <NextSeo description={description} openGraph={{ title, description }} title={title} />
      <main>
        <Container>
          <Spacer>
            <MainContainer>
              <PageWrap>
                <PageHead>
                  <PageTitle title={title} />
                </PageHead>
                <SitemapList
                  menuList={[
                    {
                      title: 'ポートフォリオ',
                      link: '/',
                      list: [
                        { title: '自己紹介', link: '/#about' },
                        { title: '私が出来ること', link: '/#possible' },
                        { title: '実績一覧', link: '/#works' },
                        { title: 'お知らせ一覧', link: '/news' },
                        { title: '個人情報保護方針', link: '/pages/privacy' },
                        { title: '免責事項', link: '/pages/disclaimer' },
                        { title: '特定商取引法表示', link: '/' }
                      ]
                    },
                    {
                      title: '技術ブログ',
                      link: links.BLOG,
                      isBlank: true
                    },
                    {
                      title: 'Chrome拡張機能開発リスト',
                      link: links.CHROME_EXTENSIONS,
                      isBlank: true
                    },
                    {
                      title: 'Slim Chatwork公式サイト',
                      link: links.SLIM_CHATWORK,
                      isBlank: true
                    }
                  ]}
                />
                <PageNavigation link="/" title="TOPへ" />
                <Breadcrumbs
                  lists={[
                    {
                      title: 'TOP'
                    },
                    {
                      title: title
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

export default Sitemap
