import Image from 'next/image'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'
import IndexAuth from '../components/Index/Auth'

export default function IndexPage() {
  const t = useTranslations()

  return (
    <section className="relative bg-base-100">
      <div className="invisible absolute bottom-0 left-0 z-0 h-20 w-20 overflow-hidden lg:visible lg:h-72 lg:w-72">
        <Image
          alt="moutmout"
          loading="lazy"
          layout="fill"
          quality="75"
          src="https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true"
        />
      </div>
      <div className="flex h-screen flex-wrap bg-base-200">
        <div className="hero hidden lg:hero lg:w-1/2">
          <div className="hero-content">
            <div className="max-w-md">
              <h1 className="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse">
                Memnix app
              </h1>
              <p className="py-6 font-bold italic">
                {t('spaced_repetition_learning_system')}
              </p>
              <div className="flex w-full justify-center">
                <NextLink className="mx-auto" href="/discover">
                  <button className="hoveranimation btn btn-primary">
                    {t('learn_more')}
                  </button>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-base-100 lg:w-1/2">
          <div className="flex h-fit flex-col justify-center justify-between">
            <div className="ml-3 flex items-center space-x-3 pb-8 pt-5 lg:hidden">
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
                <Image
                  alt="moutmout"
                  loading="lazy"
                  layout="fill"
                  quality="75"
                  src="https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true"
                />
              </div>
              <h1 className="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse">
                Memnix
              </h1>
            </div>
            <IndexAuth />
            <div className="mx-auto items-center py-6 lg:hidden">
              <p className="py-6 font-bold italic"></p>
              <div className="flex w-full justify-center">
                <NextLink href="/discover">
                  <button className="hoveranimation btn btn-secondary">
                    {t('learn_more')}
                  </button>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      guest: true,
    },
  }
}
