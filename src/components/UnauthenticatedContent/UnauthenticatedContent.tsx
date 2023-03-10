import Button from '@components/UI/Button/Button'
import { signIn } from 'next-auth/react'

import styles from './UnauthenticatedContent.module.scss'

const UnauthenticatedContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <p className={styles.title}>本ページは認証が必要です</p>
        <p>お問い合わせから事前にアカウント発行依頼の上、ログインを行って下さい。</p>
      </div>
      <Button
        className={styles.button}
        onClick={() => signIn('auth0', undefined, { prompt: 'login' })}
        radius="radius-small"
        text="ログイン"
        variant="outlined"
      />
    </div>
  )
}

export default UnauthenticatedContent
