import '@styles/common.scss'

import type { AppProps } from 'next/app'

import CommonScript from '@/pages/_commonScript'

export default function App({ Component, pageProps }: AppProps) {
  CommonScript()
  return <Component {...pageProps} />
}
