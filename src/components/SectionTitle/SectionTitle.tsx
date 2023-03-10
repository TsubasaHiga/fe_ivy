import clsx from 'clsx'
import { memo } from 'react'

import styles from './SectionTitle.module.scss'

type Props = {
  title: string
  addClassName?: string
  onClick?: () => void
}

const SectionTitle = ({ title, addClassName, onClick }: Props) => {
  return (
    <h2 className={clsx(styles.title, addClassName)}>
      {onClick ? (
        <span onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
          {title}
        </span>
      ) : (
        <span>{title}</span>
      )}
    </h2>
  )
}

export default memo(SectionTitle)
