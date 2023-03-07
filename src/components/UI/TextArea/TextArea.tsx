import clsx from 'clsx'

import styles from './TextArea.module.scss'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  addClassName?: string
}

const TextArea = ({ placeholder, onChange, addClassName }: Props) => {
  return <textarea className={clsx(styles.textarea, addClassName)} onChange={onChange} placeholder={placeholder} />
}

export default TextArea
