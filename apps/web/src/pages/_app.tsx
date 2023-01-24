import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { wrapper } from '@cms-demo-turbo/store'

if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === '1') {
  require('@cms-demo-turbo/api-mocks')
}

const DPCNextRtkQStartPage = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>DPC Next Basic Application</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(DPCNextRtkQStartPage)
