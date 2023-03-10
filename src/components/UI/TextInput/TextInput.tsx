import clsx from 'clsx'
import { memo } from 'react'

import styles from './TextInput.module.scss'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  addClassName?: string
}

const TextInput = ({ placeholder, onChange, addClassName }: Props) => {
  return (
    <input className={clsx(styles.input, addClassName)} onChange={onChange} placeholder={placeholder} type="text" />
  )
}

export default memo(TextInput)
