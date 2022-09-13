import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { GetStaticPropsContext } from 'next'

function MyApp({
  Component,
  pageProps,
}: AppProps & { pageProps?: { messages?: AbstractIntlMessages } }) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
