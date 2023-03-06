import styles from './MainContainer.module.scss'

type Props = {
  children: React.ReactNode
}

const MainContainer = ({ children }: Props) => {
  return <div className={styles['main-container']}>{children}</div>
}

export default MainContainer
