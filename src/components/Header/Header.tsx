import GlobalMenu from '@components/GlobalMenu/GlobalMenu'
import Logo from '@components/Icons/Logo'
import MenuButton from '@components/MenuButton/MenuButton'
import { links } from '@const/values'
import Spacer from '@layouts/Spacer/Spacer'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Spacer>
          <div className={styles.inner}>
            <a className={styles.logo} href={'/'} title="Topへ戻る">
              <Logo />
            </a>
            <GlobalMenu
              menuList={[
                { title: 'お知らせ', link: '/#news' },
                { title: '技術ブログ', link: links.BLOG, isBlank: true },
                { title: 'Chrome拡張機能リスト', link: links.CHROME_EXTENSIONS, isBlank: true }
              ]}
            />
          </div>
        </Spacer>
      </div>
      <MenuButton />
    </header>
  )
}

export default Header
