import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { NewsType } from '@type/NewsType'
import ChangeDateStringToSpecificFormat from '@utils/changeDateStringToSpecificFormat'
import Link from 'next/link'

import styles from './NewsItem.module.scss'

type Props = {
  item: NewsType
}

const NewsItem = ({ item }: Props): JSX.Element => {
  const { id, publishedAt, title } = item

  // 日付をYYYY/MMに変換
  const date = ChangeDateStringToSpecificFormat(publishedAt, 'YYYY/MM/DD')

  return (
    <Link className={styles.item} href={`/news/${id}`} title={title}>
      <div className={styles.inner}>
        <time className={styles.date} dateTime={date}>
          {date}
        </time>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <span className={styles.icon}>
        <ChevronRightIcon />
      </span>
    </Link>
  )
}

export default NewsItem
