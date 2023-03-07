import GlobalMenuItem from '@components/GlobalMenuItem/GlobalMenuItem'
import type { MenuListType } from '@type/GlobalMenuType'
import GetDeviceTypeClassName from '@utils/getDeviceTypeClassName'
import clsx from 'clsx'

import styles from './GlobalMenu.module.scss'

type Props = {
  menuList: MenuListType[]
}

const GlobalMenu = ({ menuList }: Props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {menuList.map((item, index) => (
          <MenuList key={index} menu={item} />
        ))}
      </div>
    </nav>
  )
}

export default GlobalMenu

const MenuList = ({ menu }: { menu: MenuListType }) => {
  const { displayDeviceType } = menu
  return (
    <div className={styles['menu-list']}>
      <span className={clsx(styles.title, 'u-mqw-down')}>{menu.title}</span>
      <div className={clsx(styles.list, GetDeviceTypeClassName(displayDeviceType))}>
        {menu.list.map((menuItem, index) => (
          <GlobalMenuItem item={menuItem} key={index} />
        ))}
      </div>
    </div>
  )
}
