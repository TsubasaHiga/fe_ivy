import SectionTitle from '@components/SectionTitle/SectionTitle'
import Spacer from '@layouts/Spacer/Spacer'

import styles from './Section.module.scss'

type Props = {
  id: string
  title?: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: Props) => {
  return (
    <section className={styles.section} id={id}>
      <Spacer>
        {title && <SectionTitle title={title} />}
        {children}
      </Spacer>
    </section>
  )
}

export default Section
