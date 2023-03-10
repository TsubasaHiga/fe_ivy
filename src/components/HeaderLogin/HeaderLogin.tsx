import Button from '@components/UI/Button/Button'
import FaceIcon from '@mui/icons-material/Face'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import clsx from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react'
import { memo, useRef, useState } from 'react'
import { useClickAnyWhere } from 'usehooks-ts'

import styles from './HeaderLogin.module.scss'

const HeaderLogin = () => {
  const loginRef = useRef<HTMLDivElement>(null)

  // session確認
  const { data: session, status } = useSession()

  // navの表示のステータスを管理
  const [isNavOpen, setIsNavOpen] = useState(false)

  // click
  const clickHandler = () => {
    // ログインしていない場合はログイン画面へ
    if (status !== 'authenticated') {
      signIn('auth0', undefined, { prompt: 'login' })
      return
    }

    setIsNavOpen(!isNavOpen)
  }

  useClickAnyWhere((e) => {
    if (!isNavOpen) return

    // loginRefの外側をクリックした場合はnavを閉じる
    if (!loginRef.current?.contains(e.target as Node)) {
      setIsNavOpen(false)
    }
  })

  return (
    <Tooltip arrow title={status !== 'authenticated' && 'ログインする'}>
      <div className={styles.login} ref={loginRef}>
        <button className={clsx(styles.avatar, isNavOpen && styles.active)} onClick={clickHandler} title="詳細を開く">
          <span className={styles.image}>
            {status === 'authenticated' ? (
              <Avatar alt={session!.user!.email!} src={session!.user!.image!} />
            ) : (
              <FaceIcon />
            )}
          </span>
        </button>
        <nav className={clsx(styles.nav, isNavOpen && styles.open)}>
          {status === 'authenticated' && <p className={styles.name}>{session.user?.email}</p>}
          <Button className={styles.button} onClick={() => signOut()} text="ログアウト" />
        </nav>
      </div>
    </Tooltip>
  )
}

export default memo(HeaderLogin)
