import styles from './TextArea.module.scss'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ placeholder, onChange }: Props) => {
  return <textarea className={styles.textarea} onChange={onChange} placeholder={placeholder} />
}

export default TextArea
