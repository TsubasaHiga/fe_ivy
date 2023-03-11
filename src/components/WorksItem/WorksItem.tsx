import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { updateSelectedCategory } from '@store/atoms/worksState'
import type { WorksType } from '@type/WorksType'
import ChangeDateStringToSpecificFormat from '@utils/changeDateStringToSpecificFormat'
import clsx from 'clsx'
import { memo, useCallback } from 'react'

import styles from './WorksItem.module.scss'

type Props = {
  item: WorksType
  index: number
  isOpen: boolean
  onClick: (index: number | null) => void
}

const WorksItem = ({ item, index, isOpen, onClick }: Props): JSX.Element => {
  const { launchDate, category, name, thumbnail, isDisclosure, workingRange, useTechnologyList, url } = item

  // 日付をYYYY/MMに変換
  const date = ChangeDateStringToSpecificFormat(launchDate, 'YYYY/MM')

  // 開閉処理
  const openHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => {
      // clickした要素がbuttonの場合は処理を中断
      if (e.target instanceof HTMLButtonElement) return

      // 既に開いている場合は閉じる
      onClick(isOpen ? null : index)
    },
    [index, onClick, isOpen]
  )

  return (
    <div className={clsx(styles.item, isOpen && styles.active)} title={isOpen ? '閉じる' : '詳細を開く'}>
      <div
        className={styles.head}
        onClick={(e) => openHandler(e)}
        onKeyDown={(e) => openHandler(e)}
        role="button"
        tabIndex={0}
      >
        <div className={styles['head-inner']}>
          <div className={styles.meta}>
            <time className={styles.date} dateTime={date}>
              {date}
            </time>
            <button className={styles.cate} onClick={() => updateSelectedCategory(category[0])}>
              {category[0]}
            </button>
          </div>
          {!isOpen && <h3 className={styles.title}>{name}</h3>}
        </div>
        <span className={clsx(styles.icon, !isOpen && styles['close-icon'])}>
          {isOpen ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
        </span>
      </div>

      {isOpen && (
        <div className={styles.content}>
          <div className={styles.image}>
            {thumbnail ? (
              <img alt={name} loading="lazy" src={thumbnail.url} />
            ) : (
              <div className={styles['no-image']}>
                <ImageNotSupportedIcon />
                <p>画像がありません</p>
              </div>
            )}
          </div>
          <div className={styles.detail}>
            <p className={styles['detail-title']}>{name}</p>
            <div className={styles['detail-list']}>
              <dl>
                <dt>開示情報</dt>
                <dd>{isDisclosure ? '開示案件です' : '非開示（情報の扱いにご注意下さい）'}</dd>
              </dl>
              <dl>
                <dt>対応範囲</dt>
                <dd>{workingRange}</dd>
              </dl>
              <dl>
                <dt>使用技術</dt>
                <dd>{useTechnologyList.join(', ')}</dd>
              </dl>
              <dl>
                <dt>URL</dt>
                <dd>
                  {url ? (
                    <a href={url} rel="noreferrer noopener" target="_blank">
                      {url}
                    </a>
                  ) : (
                    <p>公開終了</p>
                  )}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(WorksItem)
