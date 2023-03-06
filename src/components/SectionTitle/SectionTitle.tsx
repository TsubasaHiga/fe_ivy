import clsx from 'clsx'

import styles from './SectionTitle.module.scss'

type Props = {
  title: string
  addClassNames?: string
}

const SectionTitle = ({ title, addClassNames }: Props) => {
  return <h2 className={clsx(styles.title, addClassNames)}>{title}</h2>
}

export default SectionTitle
