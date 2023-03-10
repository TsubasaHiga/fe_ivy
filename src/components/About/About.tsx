import CareerList from '@components/CareerList/CareerList'
import Section from '@components/Section/Section'
import SectionTitle from '@components/SectionTitle/SectionTitle'
import LinkButtonSquare from '@components/UI/LinkButtonSquare/LinkButtonSquare'
import { memo, useCallback, useRef } from 'react'

import { snsLinks } from '@/const/values'

import styles from './About.module.scss'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // titleをクリックしたら、スクロールして該当セクションに移動する
  const titleClickHandler = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [sectionRef])

  return (
    <Section id="about" sectionRef={sectionRef}>
      <div className={styles.about}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <SectionTitle addClassName={styles.title} onClick={titleClickHandler} title="何者ですか？" />
            <p>
              1992年生まれ。沖縄県育ち、現在大阪暮らし。
              <br />
              フリーなフロントエンドエンジニアとしてコーディング案件をメインに行いながら、Web制作・Webサイト運営・ツール制作などの活動を行っています。
              <br />
              最近はめっきりWeb関連の制作活動が多いですが、元々は学生時代から工業系を生きており機械工作から電子工作・Web制作までの幅広い「ものづくり」に興味があります。
            </p>
          </div>
          <div className={styles['sns-list']}>
            <LinkButtonSquare isBlank={true} link={snsLinks.TWITTER} title="Twitter" />
            <LinkButtonSquare isBlank={true} link={snsLinks.MISSKEY} title="Misskey" />
          </div>
        </div>
        <CareerList />
      </div>
    </Section>
  )
}

export default memo(About)
