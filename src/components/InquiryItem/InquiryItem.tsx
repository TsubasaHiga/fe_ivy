import clsx from 'clsx'
import { memo } from 'react'

import styles from './InquiryItem.module.scss'

type Props = {
  name: string
  required?: boolean
  children: React.ReactNode
}

const InquiryItem = ({ name, required, children }: Props) => {
  return (
    <div className={styles.item}>
      <h3 className={clsx(styles.title, !required && styles.space)}>
        {required ? <span className={styles.required}>必須</span> : <span className={styles.optional}>任意</span>}
        {name}
      </h3>
      <div className={styles.detail}>{children}</div>
    </div>
  )
}

export default memo(InquiryItem)
