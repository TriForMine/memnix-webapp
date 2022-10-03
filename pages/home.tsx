import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'
import { CoreSkeletonSection } from '../components/Core/CoreSkeletonSection'
import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import type { DeckList, SubDeckList } from '../types'
import { apiFetcherAuth } from '../utils/api'
import { getCookie } from 'cookies-next'
import useSWR from 'swr'
import { Connected } from '../layouts/Connected'

export default function IndexPage() {
  const token = getCookie('token')

  const t = useTranslations()
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const screenSize = useWindowSize()
  const isMobile = () => (screenSize.width ? screenSize.width <= 768 : false)

  const { data: myDecksList } = useSWR<Array<SubDeckList>>(
    [`/decks/sub?refresh=true`, token],
    apiFetcherAuth
  )
  const { data: todayDeckList } = useSWR<Array<DeckList>>(
    [`/cards/today?refresh=true`, token],
    apiFetcherAuth
  )
  const { data: availableDeckList } = useSWR<Array<SubDeckList>>(
    [`/decks/available?refresh=true`, token],
    apiFetcherAuth
  )

  console.log(myDecksList, todayDeckList, availableDeckList)

  return (
    <Connected>
      {loaded ? (
        <div className="bg-base-100">
          {isMobile() ? <div>Mobile</div> : <div>Desktop</div>}
        </div>
      ) : (
        <>
          <CoreSkeletonSection />
          <CoreSkeletonSection />
          <CoreSkeletonSection />
        </>
      )}
    </Connected>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      protected: true,
    },
  }
}
