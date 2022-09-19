import Image from 'next/image'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'
import IndexAuth from '../components/Index/Auth'

export default function IndexPage() {
  const t = useTranslations()

  return <div>Home</div>
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      protected: true,
    },
  }
}
