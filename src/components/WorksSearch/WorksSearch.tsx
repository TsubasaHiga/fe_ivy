import useDeviceType from '@hooks/useDeviceType'
import SearchIcon from '@mui/icons-material/Search'
import { resetSelectedCategory } from '@store/atoms/worksState'
import { memo, useEffect, useState } from 'react'

import styles from './WorksSearch.module.scss'

type Props = {
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const placeholder = {
  lg: '案件名、年度、各種キーワードで絞り込む',
  sm: 'キーワードで絞り込む'
}

const WorksSearch = ({ onKeyDown, onCompositionStart, onCompositionEnd, onChange, onBlur }: Props): JSX.Element => {
  const deviceType = useDeviceType()
  const [placeHolder, setPlaceHolder] = useState<string>(placeholder.lg)

  // デバイスタイプが変わったらplaceholderを変更
  useEffect(() => setPlaceHolder(placeholder[deviceType]), [deviceType])

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        onBlur={() => {
          setPlaceHolder(placeholder[deviceType])
        }}
        onChange={onChange}
        onClick={() => {
          // 押下時にカテゴリーをリセット
          resetSelectedCategory()

          // 押下時にplaceholderを変更
          setPlaceHolder('Enter or Returnで検索')
        }}
        onCompositionEnd={onCompositionEnd}
        onCompositionStart={onCompositionStart}
        onKeyDown={onKeyDown}
        placeholder={placeHolder}
        type="text"
      />
    </div>
  )
}

export default memo(WorksSearch)
