import PageMeta from '@components/PageMeta/PageMeta'
import PageTitle from '@components/PageTitle/PageTitle'
import type { PageKindType } from '@type/PageType'

import styles from './PageDetail.module.scss'

type Props = {
  title: string
  pageType: PageKindType
  publishedAt: string
  updatedAt: string
  children: React.ReactNode
}

const PageDetail = ({ title, pageType, publishedAt, updatedAt, children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <PageTitle title={title} />
        <PageMeta pageType={pageType} publishedAt={publishedAt} updatedAt={updatedAt} />
      </div>
      {children}
    </section>
  )
}

export default PageDetail
