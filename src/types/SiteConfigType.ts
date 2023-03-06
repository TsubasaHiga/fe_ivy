import { Twitter } from 'next-seo/lib/types'

type SiteConfigType = {
  // Site Name
  siteName: string

  // Site Domain
  siteDomain: string

  // Site URL
  siteUrl: string

  // Base Path
  basePath: string

  // author
  author: string

  // theme color
  themeColor: string

  // twitter meta
  twitter: Twitter
}

export default SiteConfigType
