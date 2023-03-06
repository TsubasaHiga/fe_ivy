import type { PageNameType } from '@type/PageDataListType'
import GetPageDataFromPageDataList from '@utils/getPageDataFromPageDataList'
// import { default as NextHead } from 'next/head'
import { NextSeo } from 'next-seo'

import { siteConfig } from '@/siteConfig'

type Props = {
  pageName: PageNameType
}

const Head = ({ pageName }: Props) => {
  const { title, description } = GetPageDataFromPageDataList(pageName)
  // const { href, origin } = Astro.url

  return (
    <NextSeo
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'favicon.ico'
        }
      ]}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width'
        }
      ]}
      // canonical="https://www.canonical.ie/"
      description={description}
      // openGraph={{
      //   url: 'https://www.url.ie/a',
      //   title: 'Open Graph Title',
      //   description: 'Open Graph Description',
      //   images: [
      //     {
      //       url: 'https://www.example.ie/og-image-01.jpg',
      //       width: 800,
      //       height: 600,
      //       alt: 'Og Image Alt',
      //       type: 'image/jpeg'
      //     },
      //     {
      //       url: 'https://www.example.ie/og-image-02.jpg',
      //       width: 900,
      //       height: 800,
      //       alt: 'Og Image Alt Second',
      //       type: 'image/jpeg'
      //     },
      //     { url: 'https://www.example.ie/og-image-03.jpg' },
      //     { url: 'https://www.example.ie/og-image-04.jpg' }
      //   ],
      //   siteName: 'SiteName'
      // }}
      title={title}
      twitter={siteConfig.twitter}
    />
    // <head>
    //   {/* <SEO
    //     title={title}
    //     charset={'UTF-8'}
    //     description={description}
    //     openGraph={{
    //       basic: {
    //         title: title + ' | ' + siteConfig.siteName,
    //         type: 'website',
    //         image: origin + '/ogp-image.png',
    //         url: href
    //       },
    //       optional: {
    //         description: description,
    //         locale: 'ja_JP',
    //         siteName: siteConfig.siteName
    //       },
    //       image: {
    //         width: 1200,
    //         height: 630,
    //         alt: siteConfig.siteName
    //       }
    //     }}
    //     twitter={siteConfig.twitter}
    //     extend={{
    //       link: [{ rel: 'icon', href: '/favicon.svg' }],
    //       meta: [
    //         { name: 'viewport', content: 'width=device-width' },
    //         { name: 'author', content: siteConfig.author },
    //         { name: 'theme-color', content: siteConfig.themeColor }
    //       ]
    //     }}
    //   /> */}
    // </head>
  )
}

export default Head
