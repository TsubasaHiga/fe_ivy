import clsx from 'clsx'

import styles from './MainContainer.module.scss'

type Props = {
  isPaddingMinimal?: boolean
  children: React.ReactNode
}

const MainContainer = ({ isPaddingMinimal, children }: Props) => {
  return <div className={clsx(styles['main-container'], isPaddingMinimal && styles['padding-minimal'])}>{children}</div>
}

export default MainContainer
