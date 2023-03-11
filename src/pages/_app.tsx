import '@styles/common.scss'

import { ThemeProvider } from '@mui/material/styles'
import CommonScript from '@pages/_commonScript'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { theme } from '@/theme/mui'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CommonScript />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
