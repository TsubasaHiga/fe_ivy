import type { MenuItemType } from '@type/GlobalMenuType'
import Link from 'next/link'

import styles from './FooterMenuItem.module.scss'

type Props = {
  item: MenuItemType
}

const FooterMenuItem = ({ item }: Props) => {
  const { title, link, isBlank = false } = item

  return (
    <Link
      className={styles.link}
      href={link}
      rel={isBlank ? 'noopener noreferrer' : ''}
      target={isBlank ? '_blank' : ''}
      title={title}
    >
      {title}
    </Link>
  )
}

export default FooterMenuItem
