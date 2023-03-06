import styles from './Spacer.module.scss'

type Props = {
  children: React.ReactNode
}

const Spacer = ({ children }: Props) => {
  return <div className={styles.spacer}>{children}</div>
}

export default Spacer
