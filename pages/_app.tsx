import type { AppProps } from 'next/app'

import { GlobalStyle } from '@/components/_settings/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default MyApp
