import { PageKindType } from '@type/PageKindType'
import ChangeDateStringToSpecificFormat from '@utils/changeDateStringToSpecificFormat'
import GetDateTitleList from '@utils/getDateTitleList'
import { memo } from 'react'

import styles from './PageMeta.module.scss'

type Props = {
  pageType: PageKindType
  publishedAt: string
  updatedAt: string
}

const PageMeta = ({ pageType, publishedAt, updatedAt }: Props) => {
  const publishedDate = publishedAt ? ChangeDateStringToSpecificFormat(publishedAt, 'YYYY/MM/DD') : ''
  const updateDate = updatedAt ? ChangeDateStringToSpecificFormat(updatedAt, 'YYYY/MM/DD') : ''

  // タイトルの取得
  const dateTitleList = GetDateTitleList(pageType)

  return (
    <div className={styles.meta}>
      {publishedAt && (
        <div className={styles.date}>
          <span>{dateTitleList.published}：</span>
          <time dateTime={publishedDate}>{publishedDate}</time>
        </div>
      )}
      {updatedAt && (
        <div className={styles.date}>
          <span>{dateTitleList.updated}：</span>
          <time dateTime={updateDate}>{updateDate}</time>
        </div>
      )}
    </div>
  )
}

export default memo(PageMeta)
