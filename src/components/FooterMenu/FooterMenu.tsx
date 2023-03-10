import FooterMenuItem from '@components/FooterMenuItem/FooterMenuItem'
import type { MenuItemType } from '@type/GlobalMenuType'
import { memo } from 'react'

import styles from './FooterMenu.module.scss'
type Props = {
  menuList: MenuItemType[]
}

const FooterMenu = ({ menuList }: Props) => {
  return (
    <div className={styles.menu}>
      {menuList.map((item, index) => (
        <FooterMenuItem item={item} key={index} />
      ))}
    </div>
  )
}

export default memo(FooterMenu)
