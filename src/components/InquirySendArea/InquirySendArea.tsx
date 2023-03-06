import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import styles from './InquirySendArea.module.scss'

type Props = {
  children: React.ReactNode
  disabled?: boolean
}

const InquirySendArea = ({ children, disabled }: Props) => {
  return (
    <div className={styles.send} data-disabled={disabled}>
      <p className={styles.text}>
        お問合せ先を選択
        <span className={styles.icon}>
          <ArrowCircleRightIcon />
        </span>
      </p>

      <div className={styles.inner}>{children}</div>
    </div>
  )
}

export default InquirySendArea
