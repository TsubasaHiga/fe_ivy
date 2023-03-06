import type SiteConfigType from '@type/SiteConfigType'

export const siteConfig: SiteConfigType = {
  // Site Name
  siteName: 'COFUS',

  // Site Domain
  siteDomain: 'cofus.work',

  // Site URL
  siteUrl: 'https://cofus.work',

  // Base Path
  // example: '/' or '/foo/bar/dist' or etc.
  basePath: '/',

  // author
  author: '比嘉翼',

  // theme color
  themeColor: '#fff',

  // twitter meta
  twitter: {
    handle: '@_cofus',
    site: '@_cofus',
    cardType: 'summary_large_image'
  }
} as const
