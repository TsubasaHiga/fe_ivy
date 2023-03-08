import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import type { MenuItemType } from '@type/GlobalMenuType'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './SitemapItem.module.scss'

type Props = {
  isLarge?: boolean
  item: MenuItemType
}

const SitemapItem = ({ item, isLarge = false }: Props) => {
  const { title, link, isBlank = false } = item

  return (
    <div className={styles.item}>
      <Link
        className={clsx(styles.link, isLarge && styles.large)}
        href={link}
        rel={isBlank ? 'noopener noreferrer' : ''}
        target={isBlank ? '_blank' : ''}
        title={title}
      >
        {title}
        <span className={styles.icon}>
          <ArrowForwardIosIcon />
        </span>
      </Link>
    </div>
  )
}

export default SitemapItem
