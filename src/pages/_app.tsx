import '@styles/common.scss'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import CommonScript from '@/pages/_commonScript'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  CommonScript()
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
