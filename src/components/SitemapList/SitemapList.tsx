import SitemapItem from '@components/SitemapItem/SitemapItem'
import type { SitemapListType } from '@type/SitemapListType'

import styles from './SitemapList.module.scss'

type Props = {
  menuList: SitemapListType[]
}

const SitemapList = ({ menuList }: Props) => {
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

export default SitemapList

const MenuList = ({ menu }: { menu: SitemapListType }) => {
  return (
    <div className={styles['menu-list']}>
      <SitemapItem isLarge={true} item={menu} />

      {menu.list && (
        <div className={styles.list}>
          {menu.list.map((menuItem, index) => (
            <SitemapItem item={menuItem} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
