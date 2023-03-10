import CardMembershipIcon from '@mui/icons-material/CardMembership'
import Link from 'next/link'

import styles from './WorksLogin.module.scss'

const WorksLogin = (): JSX.Element => {
  return (
    <Link className={styles.button} href="/works" title="非開示案件を含む全ての実績一覧へ">
      <span className="u-mqw-up">非開示案件を含む全ての実績一覧へ</span>
      <CardMembershipIcon />
    </Link>
  )
}

export default WorksLogin
