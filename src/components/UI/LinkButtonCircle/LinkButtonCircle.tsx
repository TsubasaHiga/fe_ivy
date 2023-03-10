import clsx from 'clsx'
import Link from 'next/link'
import { memo } from 'react'

import styles from './LinkButtonCircle.module.scss'

type Props = {
  className?: string
  title: string
  link: string
  isBlank?: boolean
}

const LinkButtonCircle = ({ className, title, link, isBlank = false }: Props) => {
  return (
    <Link
      className={clsx(styles.button, className)}
      href={link}
      rel={isBlank ? 'noopener noreferrer' : ''}
      target={isBlank ? '_blank' : ''}
      title={title}
    >
      {title}
    </Link>
  )
}

export default memo(LinkButtonCircle)
