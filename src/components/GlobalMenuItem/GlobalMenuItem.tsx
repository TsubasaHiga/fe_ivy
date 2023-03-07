import LaunchIcon from '@mui/icons-material/Launch'
import type { MenuItemType } from '@type/GlobalMenuType'
import GetDeviceTypeClassName from '@utils/getDeviceTypeClassName'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './GlobalMenuItem.module.scss'

type Props = {
  item: MenuItemType
}

const GlobalMenuItem = ({ item }: Props) => {
  const { title, link, isBlank = false, displayDeviceType, icon } = item
  return (
    <Link
      className={clsx(styles.link, GetDeviceTypeClassName(displayDeviceType))}
      href={link}
      rel={isBlank ? 'noopener noreferrer' : ''}
      target={isBlank ? '_blank' : ''}
      title={title}
    >
      {title}
      {(isBlank || icon) && <span className={styles.icon}>{isBlank ? <LaunchIcon /> : icon}</span>}
    </Link>
  )
}

export default GlobalMenuItem
