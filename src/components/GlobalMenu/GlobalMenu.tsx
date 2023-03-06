import GlobalMenuItem from '@components/GlobalMenuItem/GlobalMenuItem'
import type { MenuItemType } from '@type/GlobalMenuType'

import styles from './GlobalMenu.module.scss'

type Props = {
  menuList: MenuItemType[]
}

const GlobalMenu = ({ menuList }: Props) => {
  return (
    <nav>
      <div className={styles.inner}>
        {menuList.map((item, index) => (
          <GlobalMenuItem item={item} key={index} />
        ))}
      </div>
    </nav>
  )
}

export default GlobalMenu
