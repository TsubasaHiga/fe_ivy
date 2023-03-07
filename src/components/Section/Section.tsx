import SectionTitle from '@components/SectionTitle/SectionTitle'

import styles from './Section.module.scss'

type Props = {
  id: string
  title?: string
  children: React.ReactNode
  sectionRef?: React.RefObject<HTMLElement>
}

const Section = ({ id, title, children, sectionRef }: Props) => {
  return (
    <section className={styles.section} id={id} ref={sectionRef}>
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  )
}

export default Section
