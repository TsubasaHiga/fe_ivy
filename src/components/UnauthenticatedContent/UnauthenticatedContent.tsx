import Button from '@components/UI/Button/Button'
import LinkTextArrow from '@components/UI/LinkTextArrow/LinkTextArrow'
import { signIn } from 'next-auth/react'
import { memo } from 'react'

import styles from './UnauthenticatedContent.module.scss'

const UnauthenticatedContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <p className={styles.title}>本ページは認証が必要です</p>
          <p>
            本ページは非開示案件を含みます。お問い合わせから事前に<a href="#inquiry">アカウント発行依頼</a>
            の上、ログインを行って下さい。
          </p>
        </div>
        <Button
          className={styles.button}
          onClick={() => signIn('auth0', undefined, { prompt: 'login' })}
          radius="radius-small"
          text="ログイン"
          variant="outlined"
        />
      </div>
      <LinkTextArrow isBack={true} link="/#works" title="開示案件のみの実績一覧はこちら" />
    </div>
  )
}

export default memo(UnauthenticatedContent)
