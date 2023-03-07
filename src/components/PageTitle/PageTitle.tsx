import clsx from 'clsx'

import styles from './PageTitle.module.scss'

type Props = {
  title: string
  addClassName?: string
}

const PageTitle = ({ title, addClassName }: Props) => {
  return (
    <h2 className={clsx(styles.title, addClassName)}>
      <span>{title}</span>
    </h2>
  )
}

export default PageTitle
