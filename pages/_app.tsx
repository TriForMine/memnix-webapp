import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import useUser from '../data/useUser'
import { UserContext } from '../components/user'
import Router from 'next/router'

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  pageProps?: {
    messages?: AbstractIntlMessages
    protected: boolean
    guest: boolean
  }
}) {
  const { user, loading } = useUser()

  if (pageProps.protected && loading) {
    return <div>Loading...</div>
  }

  if (pageProps.protected && (!user || Object.values(user).length === 0)) {
    Router.push('/')
    return <></>
  }

  if (pageProps.guest && user !== undefined && Object.values(user).length > 0) {
    Router.push('/home')
    return <></>
  }

  return (
    <UserContext.Provider value={user}>
      <NextIntlProvider locale="en" messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </UserContext.Provider>
  )
}

export default MyApp
