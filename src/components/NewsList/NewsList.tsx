import NewsItem from '@components/NewsItem/NewsItem'
import type { NewsResponse, NewsType } from '@type/NewsType'
import { memo } from 'react'

import styles from './NewsList.module.scss'

type Props = {
  data: NewsResponse
}

const NewsList = ({ data }: Props): JSX.Element => {
  return (
    <div className={styles.list}>
      {data.contents.map((item: NewsType) => (
        <NewsItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default memo(NewsList)
