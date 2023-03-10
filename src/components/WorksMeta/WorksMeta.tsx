import type { CustomWorksResponse } from '@type/WorksType'
import { memo } from 'react'
// import styles from './WorksMeta.module.scss'

type Props = {
  data: CustomWorksResponse
}

const WorksMeta = ({ data }: Props): JSX.Element => {
  return (
    <p>
      全実績：{data.totalCount}件／開示：{data.disclosureCount}件／非開示：{data.nonDisclosureCount}件
    </p>
  )
}

export default memo(WorksMeta)
