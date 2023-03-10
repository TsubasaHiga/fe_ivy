import Button from '@components/UI/Button/Button'
import { careerList } from '@const/Career'
import clsx from 'clsx'
import { memo, useState } from 'react'

import styles from './CareerList.module.scss'

const CareerList = (): JSX.Element => {
  // すべて見るのステータス
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.inner}>
        <h3 className={styles.title}>
          <span>経歴</span>
        </h3>
        <div className={clsx(styles.list, isOpen && styles['list-open'])}>
          {careerList.map((career, index) => {
            return (
              <dl key={index}>
                <dt dangerouslySetInnerHTML={{ __html: career.date }} />
                <dd dangerouslySetInnerHTML={{ __html: career.content }} />
              </dl>
            )
          })}
        </div>
      </div>
      <Button
        active={isOpen}
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        text={isOpen ? '閉じる' : '全部見る'}
      />
    </>
  )
}

export default memo(CareerList)
