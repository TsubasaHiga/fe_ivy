import styles from './TextInput.module.scss'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ placeholder, onChange }: Props) => {
  return <input className={styles.input} onChange={onChange} placeholder={placeholder} type="text" />
}

export default TextInput
