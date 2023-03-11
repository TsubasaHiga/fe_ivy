import EmployText from '@components/Icons/EmployText'
import NameText from '@components/Icons/NameText'
import Spacer from '@layouts/Spacer/Spacer'
import { memo } from 'react'

import styles from './KV.module.scss'

const KV = () => {
  return (
    <div className={styles.kv}>
      <Spacer>
        <h1 className={styles.title}>
          <span className={styles.employ}>
            <EmployText />
          </span>
          <span className={styles.name}>
            <NameText />
            <span className={styles.cursor}></span>
          </span>
        </h1>
      </Spacer>
    </div>
  )
}

export default memo(KV)
