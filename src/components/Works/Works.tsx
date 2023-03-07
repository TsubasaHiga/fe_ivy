import Section from '@components/Section/Section'
import WorksFilter from '@components/WorksFilter/WorksFilter'
import WorksItem from '@components/WorksItem/WorksItem'
import WorksSearch from '@components/WorksSearch/WorksSearch'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import { useStore } from '@nanostores/react'
import { getSelectedCategory, worksState } from '@store/atoms/worksState'
import type { WorksResponse, WorksType } from '@type/WorksType'
import { useMemo, useState } from 'react'

import styles from './Works.module.scss'

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
  data: WorksResponse
}

const Works = ({ data }: Props): JSX.Element => {
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

  if (!data) return <div>コンテンツが存在しません</div>

  return (
    <Section id="works" title="実績一覧">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p>全実績：{data.totalCount}件／開示：10件／非開示：80件</p>
          <LoginButton />
        </div>

        <div className={styles['search-and-filter']}>
          <WorksSearch onChange={(e) => setSearchWord(e.target.value)} />
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
    </Section>
  )
}

export default Works

const LoginButton = (): JSX.Element => {
  return (
    <button className={styles.login}>
      <span className="u-mqw-up">非開示案件を表示する</span>
      <CardMembershipIcon />
    </button>
  )
}
