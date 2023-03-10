import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SearchIcon from '@mui/icons-material/Search'
import { useStore } from '@nanostores/react'
import { resetSelectedCategory } from '@store/atoms/worksState'
import { worksState } from '@store/atoms/worksState'
import clsx from 'clsx'
import { memo, useEffect } from 'react'

import styles from './WorksSearchSwitch.module.scss'

const WorksSearchSwitch = (): JSX.Element => {
  const $workState = useStore(worksState)
  const { isSearchFormOpen } = $workState

  const clickHandler = () => {
    // isSearchFormOpenを更新
    worksState.set({
      ...$workState,
      isSearchFormOpen: !isSearchFormOpen
    })

    // idがworksの要素があれば表示領域までスクロール
    const works = document.getElementById('works')
    if (works) works.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // isSearchFormOpenの値に応じて、html要素のdata属性を変更する
    document.documentElement.dataset.searchOpen = isSearchFormOpen.toString()

    // isSearchFormOpenがfalseの時にカテゴリーをリセット
    if (!isSearchFormOpen) resetSelectedCategory()
  }, [isSearchFormOpen])

  return (
    <button className={clsx(styles.search, 'u-mqw-down')} onClick={clickHandler}>
      {isSearchFormOpen ? <ArrowBackIosNewIcon /> : <SearchIcon />}
    </button>
  )
}

export default memo(WorksSearchSwitch)
