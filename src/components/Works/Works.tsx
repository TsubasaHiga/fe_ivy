import Section from '@components/Section/Section'
import WorksLogin from '@components/WorksLogin/WorksLogin'
import WorksMain from '@components/WorksMain/WorksMain'
import WorksMeta from '@components/WorksMeta/WorksMeta'
import type { CustomWorksResponse } from '@type/WorksType'
import { memo } from 'react'

import styles from './Works.module.scss'

type Props = {
  data: CustomWorksResponse
}

const Works = ({ data }: Props): JSX.Element => {
  if (!data) return <div>コンテンツが存在しません</div>

  return (
    <Section id="works" title="実績一覧">
      <div className={styles.inner}>
        <div className={styles.head}>
          <WorksMeta data={data} />
          <WorksLogin />
        </div>
        <WorksMain data={data} />
      </div>
    </Section>
  )
}

export default memo(Works)
