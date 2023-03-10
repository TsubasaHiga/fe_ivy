import WorksFilter from '@components/WorksFilter/WorksFilter'
import WorksItem from '@components/WorksItem/WorksItem'
import WorksSearch from '@components/WorksSearch/WorksSearch'
import WorksSearchSwitch from '@components/WorksSearchSwitch/WorksSearchSwitch'
import { useStore } from '@nanostores/react'
import { getSelectedCategory, worksState } from '@store/atoms/worksState'
import type { CustomWorksResponse, WorksType } from '@type/WorksType'
import { useMemo, useState } from 'react'

import styles from './WorksMain.module.scss'

const filterSearchWord = (data: WorksType[], searchWord: string): WorksType[] => {
  /**
   * フィルタリング対象は以下で、完全一致もしくは部分一致または大文字焼文字含む形でフィルタリング
   * - name
   * - category
   * - launchDate
   * - workingRange
   * - useTechnologyList
   */

  // 検索ワードを小文字に変換
  const word = searchWord.toLowerCase()
  const filteredWorks = data.filter((item) => {
    const name = item.name.toLowerCase().includes(word)
    const category = item.category.some((c) => c.toLowerCase().includes(word))
    const launchDate = item.launchDate.toLowerCase().includes(word)
    const workingRange = item.workingRange.some((wr) => wr.toLowerCase().includes(word))
    const useTechnologyList = item.useTechnologyList.some((utl) => utl.toLowerCase().includes(word))

    return name || category || launchDate || workingRange || useTechnologyList
  })
  return filteredWorks
}

type Props = {
  data: CustomWorksResponse
}

const WorksMain = ({ data }: Props): JSX.Element => {
  // console.log(data)
  const $workState = useStore(worksState)

  // WorksItemの開閉状態のindexを管理
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // 検索ワードのstate
  const [searchWord, setSearchWord] = useState<string>('')

  const filterWorksData = useMemo((): WorksType[] => {
    if (!data) return []

    // レスポンスデータからcontentsを取得
    const { contents } = data

    // 選択されたカテゴリーを取得
    const { id } = getSelectedCategory($workState)

    // idがallの場合はworksListをそのまま返す
    if (id === 'all') {
      // 検索ワードがある場合は検索ワードでフィルタリング
      if (searchWord) {
        setOpenIndex(null)
        return filterSearchWord(contents, searchWord)
      }

      return contents
    }

    // contentsのカテゴリーをidでフィルタリング
    const filteredWorks = contents.filter((item) => item.category.includes(id))
    return filteredWorks
  }, [$workState, data, searchWord])

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    setSearchWord((e.target as HTMLInputElement).value)
  }

  return (
    <div className={styles.main}>
      <div className={styles['search-and-filter']}>
        <WorksSearchSwitch />
        <WorksSearch
          onChange={(e) => {
            // 検索ワードが空の場合は検索ワードを空にする
            if ((e.target as HTMLInputElement).value === '') setSearchWord('')
          }}
          onKeyDown={searchHandler}
        />
        <WorksFilter data={data} />
      </div>

      <div className={styles.list}>
        {filterWorksData.map((item: WorksType, index) => (
          <WorksItem
            index={index}
            isOpen={openIndex === index}
            item={item}
            key={item.id}
            onClick={(index) => setOpenIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default WorksMain
