import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import clsx from 'clsx'
import { memo, useState } from 'react'

import styles from './Select.module.scss'

type Props = {
  options: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  addClassName?: string
}

const Select = ({ options, onChange, addClassName }: Props) => {
  // selectを変更したかどうかを判定するためのstate
  const [isChanged, setIsChanged] = useState(false)

  return (
    <div className={clsx(styles.root, addClassName)}>
      <select
        className={clsx(styles.select, isChanged && styles.changed)}
        onChange={(e) => {
          onChange(e)
          setIsChanged(true)
        }}
      >
        <option disabled={isChanged}>種類を選択してください</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className={styles.icon}>
        <KeyboardArrowDownIcon />
      </span>
    </div>
  )
}

export default memo(Select)
