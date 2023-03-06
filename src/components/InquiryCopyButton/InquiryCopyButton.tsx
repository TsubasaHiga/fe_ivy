import CopyAllIcon from '@mui/icons-material/CopyAll'
import clsx from 'clsx'
import { memo, useState } from 'react'

import styles from './InquiryCopyButton.module.scss'

type Props = {
  onClick: () => void
  disabled: boolean
}

const InquiryCopyButton = ({ onClick, disabled }: Props) => {
  // コピー成功時に表示するメッセージを表示するための状態を管理
  const [isShow, setIsShow] = useState(false)

  const clickHandler = () => {
    // onClick
    onClick()

    // copySuccessDateが変更されたら、isShowをtrueにして、数秒後にfalseにする
    setIsShow(true)
    const timeout = setTimeout(() => setIsShow(false), 700)
    return () => clearTimeout(timeout)
  }

  return (
    <button
      aria-label="入力内容をコピー"
      className={clsx(styles.button, isShow && styles.active)}
      disabled={disabled}
      onClick={clickHandler}
      title="入力内容をコピー"
    >
      入力内容をコピー
      <span className={styles.icon}>{isShow ? <span>👍</span> : <CopyAllIcon />}</span>
    </button>
  )
}

export default memo(InquiryCopyButton)
