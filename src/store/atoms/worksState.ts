import type { SelectedCategoryListType } from '@type/WorksType'
import { atom } from 'nanostores'

export type WorksStateType = {
  selectedCategoryList: SelectedCategoryListType[]
  isSearchFormOpen: boolean
}
export const worksState = atom<WorksStateType>({
  // 選択されているカテゴリー
  selectedCategoryList: [
    {
      id: 'all',
      name: '全て',
      isSelected: true
    }
  ],

  // 検索フォームの開閉ステータス
  isSearchFormOpen: false
})

// selectedCategoryListに追加する
export const addSelectedCategory = (data: SelectedCategoryListType[]) => {
  const worksStateData = worksState.get()
  const { selectedCategoryList } = worksStateData

  // selectedCategoryListとdataを結合する
  // ただし重複するものは除く
  const filteredData = selectedCategoryList.concat(
    data.filter((item) => {
      return !selectedCategoryList.some((selectedItem) => {
        return selectedItem.id === item.id
      })
    })
  )

  worksState.set({
    ...worksStateData,
    selectedCategoryList: filteredData
  })
}

// selectedCategoryListから指定したnameのisSelectedをtrueに、それ以外をfalseにする
export const updateSelectedCategory = (name: string) => {
  const worksStateData = worksState.get()
  const { selectedCategoryList } = worksStateData

  worksState.set({
    ...worksStateData,
    selectedCategoryList: selectedCategoryList.map((item) => {
      return { ...item, isSelected: item.name === name }
    })
  })
}

// selectedCategoryListからisSelectedがtrueのものを返す
export const getSelectedCategory = (worksStateData: WorksStateType) => {
  const { selectedCategoryList } = worksStateData
  return selectedCategoryList.filter((item) => item.isSelected)[0]
}

// selectedCategoryListをリセットする
export const resetSelectedCategory = () => {
  const worksStateData = worksState.get()
  const { selectedCategoryList } = worksStateData

  worksState.set({
    ...worksStateData,
    selectedCategoryList: selectedCategoryList.map((item) => {
      return { ...item, isSelected: item.id === 'all' }
    })
  })
}
