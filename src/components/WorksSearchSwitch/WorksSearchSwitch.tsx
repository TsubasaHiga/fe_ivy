import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SearchIcon from '@mui/icons-material/Search'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import styles from './WorksSearchSwitch.module.scss'

const WorksSearchSwitch = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  // isOpenの値に応じて、html要素のdata属性を変更する
  useEffect(() => {
    document.documentElement.dataset.searchOpen = isOpen.toString()
  }, [isOpen])

  return (
    <button className={clsx(styles.search, 'u-mqw-down')} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <ArrowBackIosNewIcon /> : <SearchIcon />}
    </button>
  )
}

export default WorksSearchSwitch
