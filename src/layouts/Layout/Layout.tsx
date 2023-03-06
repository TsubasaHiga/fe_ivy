// import AnalyticsBody from '@components/Analytics/AnalyticsBody'
// import AnalyticsFooter from '@components/Analytics/AnalyticsFooter'
// import AnalyticsHead from '@components/Analytics/AnalyticsHead'
import Footer from '@components/Footer/Footer'
import Head from '@components/Head/Head'
import Header from '@components/Header/Header'
import Inquiry from '@components/Inquiry/Inquiry'
import type { PageNameType } from '@type/PageDataListType'

import { siteConfig } from '@/siteConfig'

type Props = {
  pageName: PageNameType
  children: React.ReactNode
}

const Layout = ({ pageName, children }: Props) => {
  return (
    <>
      <Head pageName={pageName} />
      {/* <AnalyticsBody /> */}
      <Header />
      {children}
      <Inquiry />
      <Footer title={siteConfig.siteName} />
      {/* <AnalyticsFooter /> */}
    </>
  )
}

export default Layout
