import ChangeDateStringToSpecificFormat from '@utils/changeDateStringToSpecificFormat'
import GetDateTitleList from '@utils/getDateTitleList'

import styles from './PageMeta.module.scss'

type Props = {
  pageType: 'article' | 'fixed'
  publishedAt: string
  updatedAt: string
}

const PageMeta = ({ pageType, publishedAt, updatedAt }: Props) => {
  const publishedDate = ChangeDateStringToSpecificFormat(publishedAt, 'YYYY/MM/DD')
  const updateDate = ChangeDateStringToSpecificFormat(updatedAt, 'YYYY/MM/DD')

  // タイトルの取得
  const dateTitleList = GetDateTitleList(pageType)

  return (
    <div className={styles.meta}>
      <div className={styles.date}>
        <span>{dateTitleList.published}：</span>
        <time dateTime={publishedDate}>{publishedDate}</time>
      </div>
      <div className={styles.date}>
        <span>{dateTitleList.updated}：</span>
        <time dateTime={updateDate}>{updateDate}</time>
      </div>
    </div>
  )
}

export default PageMeta
