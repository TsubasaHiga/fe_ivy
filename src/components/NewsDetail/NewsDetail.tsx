import Article from '@components/Article/Article'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import PageDetail from '@components/PageDetail/PageDetail'
import PageNavigation from '@components/PageNavigation/PageNavigation'
import type { NewsResponse, NewsType } from '@type/NewsType'

// import styles from './NewsDetail.module.scss'

type Props = {
  id: string
  newsResponseData: NewsResponse
  detailData: NewsType
}

const NewsDetail = ({ id, newsResponseData, detailData }: Props): JSX.Element => {
  if (!detailData) return <div>コンテンツが存在しません</div>

  // お知らせ一覧からidを元に前後のコンテンツを取得
  const index = newsResponseData.contents.findIndex((content) => content.id === id)
  const prev = newsResponseData.contents[index - 1] || {}
  const next = newsResponseData.contents[index + 1] || {}

  return (
    <PageDetail
      pageType="article"
      publishedAt={detailData.publishedAt}
      title={detailData.title}
      updatedAt={detailData.updatedAt}
    >
      <Article content={detailData.content} />
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
    </PageDetail>
  )
}

export default NewsDetail
