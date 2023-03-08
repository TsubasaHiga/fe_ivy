import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { BreadcrumbsType } from '@type/BreadcrumbsType'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './Breadcrumbs.module.scss'

type Props = {
  lists: BreadcrumbsType[]
}

const Breadcrumbs = ({ lists }: Props): JSX.Element => {
  // 最初にpath追加
  lists[0].path = '/'

  return (
    <div className={clsx(styles.root, 'u-mqw-up')} typeof="BreadcrumbList" vocab="https://schema.org/">
      <div className={styles.inner}>
        <div className={styles.list}>
          {lists.map((item, index) => (
            <div className={styles.item} key={index} property="itemListElement" typeof="ListItem">
              <Item hasLink={index < lists.length - 1} item={item} />
              <meta content={String(index + 1)} property="position" />
              {index < lists.length - 1 && <ChevronRightIcon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs

const Item = ({ item, hasLink }: { item: BreadcrumbsType; hasLink: boolean }) => {
  if (hasLink) {
    return (
      <Link href={String(item.path)} property="item" title={item.title} typeof="WebPage">
        <span property="name">{item.title}</span>
      </Link>
    )
  }

  return <span property="name">{item.title}</span>
}
