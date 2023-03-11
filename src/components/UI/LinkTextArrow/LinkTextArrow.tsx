import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import clsx from 'clsx'
import Link from 'next/link'
import { memo } from 'react'

import styles from './LinkTextArrow.module.scss'

type Props = {
  className?: string
  title: string
  link: string
  isBlank?: boolean
  isBack?: boolean
}

const LinkTextArrow = ({ className, title, link, isBlank = false, isBack = false }: Props) => {
  return (
    <Link
      className={clsx(styles.button, className)}
      href={link}
      rel={isBlank ? 'noopener noreferrer' : ''}
      target={isBlank ? '_blank' : ''}
      title={title}
    >
      {isBack && <ChevronLeftIcon />}
      {title}
      {!isBack && <ChevronRightIcon />}
    </Link>
  )
}

export default memo(LinkTextArrow)
