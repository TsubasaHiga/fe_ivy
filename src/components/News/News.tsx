import NewsList from '@components/NewsList/NewsList'
import Section from '@components/Section/Section'
import LinkButtonCircle from '@components/UI/LinkButtonCircle/LinkButtonCircle'
import type { NewsResponse } from '@type/NewsType'

import styles from './News.module.scss'

type Props = {
  data: NewsResponse
}

const News = ({ data }: Props): JSX.Element => {
  // console.log(data)

  if (!data) return <div>コンテンツが存在しません</div>

  return (
    <Section id="news" title="お知らせ">
      <div className={styles.inner}>
        <NewsList data={data} />
        <LinkButtonCircle className={styles.button} link="/news/" title="全部見る" />
      </div>
    </Section>
  )
}

export default News
