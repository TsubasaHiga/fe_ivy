import GlobalMenuItem from '@components/GlobalMenuItem/GlobalMenuItem'
import type { MenuListType } from '@type/GlobalMenuType'
import GetDeviceTypeClassName from '@utils/getDeviceTypeClassName'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import styles from './GlobalMenu.module.scss'

type Props = {
  menuList: MenuListType[]
}

const GlobalMenu = ({ menuList }: Props) => {
  // 現在のページ情報を取得する
  const router = useRouter()
  const { asPath } = router
  console.log(asPath)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {menuList.map((item, index) => (
          <MenuList asPath={asPath} key={index} menu={item} />
        ))}
      </div>
    </nav>
  )
}

export default GlobalMenu

const MenuList = ({ menu, asPath }: { menu: MenuListType; asPath: string }) => {
  const { displayDeviceType } = menu
  return (
    <div className={styles['menu-list']}>
      <span className={clsx(styles.title, 'u-mqw-down')}>{menu.title}</span>
      <div className={clsx(styles.list, GetDeviceTypeClassName(displayDeviceType))}>
        {menu.list.map((menuItem, index) => (
          <GlobalMenuItem asPath={asPath} item={menuItem} key={index} />
        ))}
      </div>
    </div>
  )
}
