import GlobalMenu from '@components/GlobalMenu/GlobalMenu'
import HeaderLogin from '@components/HeaderLogin/HeaderLogin'
import Logo from '@components/Icons/Logo'
import MenuButton from '@components/MenuButton/MenuButton'
import { links, snsLinks } from '@const/values'
import Spacer from '@layouts/Spacer/Spacer'
// import CardMembershipIcon from '@mui/icons-material/CardMembership'
import Link from 'next/link'
import { memo } from 'react'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Spacer>
          <div className={styles.inner}>
            <Link className={styles.logo} href={'/'} title="Topへ戻る">
              <Logo />
            </Link>
            <div className={styles['nav-wrap']}>
              <GlobalMenu
                menuList={[
                  {
                    title: 'ページ一覧',
                    list: [
                      { title: 'お知らせ', link: '/news' },
                      { title: '実績一覧', link: '/works' },
                      { title: '個人情報保護方針', displayDeviceType: 'sm', link: '/pages/privacy' },
                      { title: '免責事項', displayDeviceType: 'sm', link: '/pages/disclaimer' },
                      { title: 'サイトマップ', displayDeviceType: 'sm', link: '/sitemap' },
                      { title: '技術ブログ', displayDeviceType: 'lg', link: links.BLOG, isBlank: true },
                      {
                        title: 'Chrome拡張機能リスト',
                        displayDeviceType: 'lg',
                        link: links.CHROME_EXTENSIONS,
                        isBlank: true
                      }
                    ]
                  },
                  {
                    title: 'その他',
                    displayDeviceType: 'sm',
                    list: [
                      { title: 'GitHub', link: links.GITHUB, isBlank: true },
                      { title: 'Twitter', link: snsLinks.TWITTER, isBlank: true },
                      { title: 'Chatwork', link: links.CHATWORK, isBlank: true }
                    ]
                  }
                ]}
              />
              <HeaderLogin />
              <MenuButton />
            </div>
          </div>
        </Spacer>
      </div>
    </header>
  )
}

export default memo(Header)
