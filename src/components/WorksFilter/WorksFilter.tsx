import { useStore } from '@nanostores/react'
import { addSelectedCategory, updateSelectedCategory, worksState } from '@store/atoms/worksState'
import type { CustomWorksResponse } from '@type/WorksType'
import SetScrollPositionToCenter from '@utils/setScrollPositionToCenter'
import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useRef } from 'react'

import styles from './WorksFilter.module.scss'

type Props = {
  data: CustomWorksResponse
}

type SelectedCategoryListType = {
  id: string
  name: string
  isSelected: boolean
}

const GetCategoryList = (data: CustomWorksResponse): SelectedCategoryListType[] => {
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

  // refを設定
  const refRoot = useRef<HTMLDivElement>(null)
  const refCurrentButton = useRef<HTMLButtonElement>(null)

  // dataの中からcategoryを抽出し重複を削除
  const categoryList = useMemo(() => GetCategoryList(data), [data])

  // categoryListの中から重複を削除したものをselectedCategoryListに追加
  useEffect(() => {
    addSelectedCategory(categoryList)
  }, [categoryList])

  // クリックされたカテゴリーnameのisSelectedをtrueにする
  const clickHandler = useCallback((name: string) => updateSelectedCategory(name), [])

  // ボタンがされた時にスクロール位置を中央に寄せる処理
  useEffect(() => {
    if (refRoot.current && refCurrentButton.current) {
      console.log('scroll')
      SetScrollPositionToCenter(refRoot.current, refCurrentButton.current, 'smooth', 4)
    }
  }, [selectedCategoryList])

  // マウスホイールで横スクロール処理
  const addHorizontalScrollWithWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()
    if (refRoot.current) {
      const delta = e.deltaY
      refRoot.current.scrollLeft += delta
    }
  }, [])

  // マウスホイールで横スクロール処理
  useEffect(() => {
    // ref
    const element = refRoot.current
    element?.addEventListener('wheel', addHorizontalScrollWithWheel, { passive: false })
    return () => {
      element?.removeEventListener('wheel', addHorizontalScrollWithWheel)
    }
  }, [addHorizontalScrollWithWheel])

  return (
    <div className={styles.filter} ref={refRoot}>
      <div className={styles.inner}>
        {selectedCategoryList.map((item, index) => (
          <button
            className={clsx(styles.button, item.isSelected && styles['active'])}
            key={index}
            onClick={() => clickHandler(item.name)}
            ref={item.isSelected ? refCurrentButton : null}
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
