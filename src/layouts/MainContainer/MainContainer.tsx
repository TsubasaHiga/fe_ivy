import clsx from 'clsx'

import styles from './MainContainer.module.scss'

type Props = {
  isHome?: boolean
  children: React.ReactNode
}

const MainContainer = ({ isHome, children }: Props) => {
  return <div className={clsx(styles['main-container'], isHome && styles.home)}>{children}</div>
}

export default MainContainer
