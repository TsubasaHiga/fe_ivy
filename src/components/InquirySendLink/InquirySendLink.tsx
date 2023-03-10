import LaunchIcon from '@mui/icons-material/Launch'
import Link from 'next/link'
import { memo } from 'react'

import styles from './InquirySendLink.module.scss'

type Props = {
  text: string
  link: string
  disabled?: boolean
}

const InquirySendLink = ({ text, link, disabled }: Props) => {
  return (
    <Link
      className={styles.link}
      data-disabled={disabled}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      title={text}
    >
      {text}
      <span className={styles.icon}>
        <LaunchIcon />
      </span>
    </Link>
  )
}

export default memo(InquirySendLink)
