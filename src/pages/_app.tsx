import '@styles/common.scss'

import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import CommonScript from '@/pages/_commonScript'
import { theme } from '@/theme/mui'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  CommonScript()
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
