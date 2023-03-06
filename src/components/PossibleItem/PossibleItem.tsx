import Image from 'next/image'

import type { PossibleItemType } from '@/types/PossibleItemType'

import styles from './PossibleItem.module.scss'

type Props = {
  item: PossibleItemType
}

const PossibleItem = ({ item }: Props) => {
  const { name, images, title, text } = item
  const { src, size } = images

  return (
    <div className={styles.item}>
      <div className={styles['image-area']}>
        <Image alt={title} className={styles[name]} height={size.h} src={src} width={size.w} />
      </div>
      <div className={styles.detail}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default PossibleItem
