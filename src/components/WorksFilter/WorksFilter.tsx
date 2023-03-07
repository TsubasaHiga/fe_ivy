import { useStore } from '@nanostores/react'
import { addSelectedCategory, updateSelectedCategory, worksState } from '@store/atoms/worksState'
import type { WorksResponse } from '@type/WorksType'
import clsx from 'clsx'
import { useCallback, useEffect, useMemo } from 'react'

import styles from './WorksFilter.module.scss'

type Props = {
  data: WorksResponse
}

type SelectedCategoryListType = {
  id: string
  name: string
  isSelected: boolean
}

const GetCategoryList = (data: WorksResponse): SelectedCategoryListType[] => {
  // dataの中からcategoryのみを抽出した配列を作成
  const categoryList = data.contents.map((item) => ({
    id: item.category[0],
    name: item.category[0],
    isSelected: false
  }))

  // categoryListの中から重複を削除
  const uniqueCategoryList = categoryList.filter(
    (item, index, self) => self.findIndex((t) => t.name === item.name) === index
  )

  return uniqueCategoryList
}

const WorksFilter = ({ data }: Props): JSX.Element => {
  const $workState = useStore(worksState)
  const { selectedCategoryList } = $workState

  // dataの中からcategoryを抽出し重複を削除
  const categoryList = useMemo(() => GetCategoryList(data), [data])

  // categoryListの中から重複を削除したものをselectedCategoryListに追加
  useEffect(() => {
    addSelectedCategory(categoryList)
  }, [categoryList])

  // クリックされたカテゴリーnameのisSelectedをtrueにする
  const clickHandler = useCallback((name: string) => updateSelectedCategory(name), [])

  return (
    <div className={styles.filter}>
      <div className={styles.inner}>
        {selectedCategoryList.map((item, index) => (
          <button
            className={clsx(styles.button, item.isSelected && styles['active'])}
            key={index}
            onClick={() => clickHandler(item.name)}
            title={item.name}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WorksFilter
