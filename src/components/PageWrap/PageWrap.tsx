import clsx from 'clsx'
import { memo } from 'react'

import styles from './PageWrap.module.scss'

type Props = {
  addGapStyle?: boolean
  children: React.ReactNode
}

const PageWrap = ({ addGapStyle = true, children }: Props) => {
  return <section className={clsx(styles.section, addGapStyle && styles.gap)}>{children}</section>
}

export default memo(PageWrap)
