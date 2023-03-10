import { memo } from 'react'

import styles from './PageHead.module.scss'

type Props = {
  children: React.ReactNode
}

const PageHead = ({ children }: Props) => {
  return <div className={styles.head}>{children}</div>
}

export default memo(PageHead)
