import LinkButtonCircle from '@components/UI/LinkButtonCircle/LinkButtonCircle'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'

import styles from './PageNavigation.module.scss'

type Props = {
  prevLink: string | undefined
  nextLink: string | undefined
  link: string
  title: string
}

const PageNavigation = ({ prevLink, nextLink, link, title }: Props): JSX.Element => {
  return (
    <div className={styles.inner}>
      <div className={styles.nav}>
        {prevLink && (
          <Link href={prevLink} title="前のコンテンツへ">
            <ArrowBackIosNewIcon />
          </Link>
        )}
      </div>
      <LinkButtonCircle className={styles.button} link={link} title={title} />
      <div className={styles.nav}>
        {nextLink && (
          <Link href={nextLink} title="次のコンテンツへ">
            <ArrowForwardIosIcon />
          </Link>
        )}
      </div>
    </div>
  )
}

export default PageNavigation
