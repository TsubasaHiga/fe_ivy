import LaunchIcon from '@mui/icons-material/Launch'
import { updateSiteState } from '@store/atoms/siteState'
import type { MenuItemType } from '@type/GlobalMenuType'
import GetDeviceTypeClassName from '@utils/getDeviceTypeClassName'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './GlobalMenuItem.module.scss'

type Props = {
  item: MenuItemType
  asPath?: string
}

const GlobalMenuItem = ({ item, asPath }: Props) => {
  const { title, link, isBlank = false, displayDeviceType, icon } = item

  // asPathとlinkが一致しているか判定
  const isActive = asPath === link

  const clickHandler = () => {
    // ページ遷移時に、isOpenMenuの値をfalseにする
    updateSiteState({ isOpenMenu: false })
  }

  return (
    <Link
      className={clsx(styles.link, GetDeviceTypeClassName(displayDeviceType), isActive && styles.active)}
      href={link}
      onClick={clickHandler}
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
