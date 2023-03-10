import FooterMenu from '@components/FooterMenu/FooterMenu'
import { links, snsLinks } from '@const/values'
import Spacer from '@layouts/Spacer/Spacer'
import { memo } from 'react'

import styles from './Footer.module.scss'

type Props = {
  title: string
}

const year = new Date().getFullYear()

const Footer = ({ title }: Props) => {
  return (
    <footer>
      <Spacer>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <FooterMenu
              menuList={[
                { title: '個人情報保護方針', link: '/pages/privacy' },
                { title: '免責事項', link: '/pages/disclaimer' },
                { title: 'サイトマップ', link: '/sitemap' }
              ]}
            />
            <span className="u-mqw-up">｜</span>
            <FooterMenu
              menuList={[
                { title: 'GitHub', link: links.GITHUB, isBlank: true },
                { title: 'Twitter', link: snsLinks.TWITTER, isBlank: true },
                { title: 'Chatwork', link: links.CHATWORK, isBlank: true }
              ]}
            />
          </nav>
          <p className={styles.copyright}>
            Copyright {year} {title}
          </p>
        </div>
      </Spacer>
    </footer>
  )
}

export default memo(Footer)
