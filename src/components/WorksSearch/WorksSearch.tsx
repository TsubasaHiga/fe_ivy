import SearchIcon from '@mui/icons-material/Search'
import { resetSelectedCategory } from '@store/atoms/worksState'

import styles from './WorksSearch.module.scss'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const WorksSearch = ({ onChange }: Props): JSX.Element => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        onChange={onChange}
        onClick={() => resetSelectedCategory()}
        placeholder="案件名、年度、各種キーワードで絞り込めます..."
        type="text"
      />
    </div>
  )
}

export default WorksSearch
