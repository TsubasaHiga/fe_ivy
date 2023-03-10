import PossibleItem from '@components/PossibleItem/PossibleItem'
import Section from '@components/Section/Section'
import { possibleList } from '@const/PossibleList'
import { memo } from 'react'

import styles from './Possible.module.scss'

const Possible = () => {
  return (
    <Section id="possible" title="私が出来ること">
      <div className={styles.list}>
        {possibleList.map((item, index) => (
          <PossibleItem item={item} key={index} />
        ))}
      </div>
    </Section>
  )
}

export default memo(Possible)
