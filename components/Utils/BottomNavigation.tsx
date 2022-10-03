import NextLink from 'next/link'
// @ts-ignore
import IconLucideBell from '~icons/lucide/bell.jsx'
// @ts-ignore
import PencilIcon from '~icons/lucide/pencil.jsx'
// @ts-ignore
import HomeIcon from '~icons/mdi/home-outline.jsx'
// @ts-ignore
import UserIcon from '~icons/lucide/user.jsx'
// @ts-ignore
import CardsIcon from '~icons/mdi/cards-outline.jsx'

export const BottomNavigation = () => {
  return (
    <>
      <div>
        <div className="m-14 w-full bg-base-200">
          <div className="fixed inset-x-0 bottom-0 block bg-base-200 shadow-xl">
            <div className="flex h-12 flex-row items-center justify-between px-7 pb-2 md:h-16 md:px-20 lg:px-40 xl:px-56">
              <NextLink href="/">
                <IconLucideBell className="hoveranimation pt-1 text-2xl hover:cursor-pointer md:text-[1.7em] lg:text-[2em]" />
              </NextLink>
              <NextLink href="/creator">
                <PencilIcon className="hoveranimation pt-1 text-2xl hover:cursor-pointer md:text-[1.7em] lg:text-[2em]" />
              </NextLink>

              <NextLink href="/home">
                <div className="hoveranimation">
                  <button className="btn-neutral btn no-animation h-[3rem] w-[3rem] -translate-y-4 rounded-full p-0 md:h-[4rem] md:w-[4rem]">
                    <HomeIcon className="text-3xl md:text-[2.3em] lg:text-[2.5em]" />
                  </button>
                </div>
              </NextLink>
              <NextLink href="/decks">
                <CardsIcon className="hoveranimation pt-1 text-2xl hover:cursor-pointer md:text-[1.7em] lg:text-[2em]" />
              </NextLink>
              <NextLink href="/">
                <UserIcon className="hoveranimation pt-1 text-2xl hover:cursor-pointer md:text-[1.7em] lg:text-[2em]" />
              </NextLink>
            </div>
          </div>
        </div>

        {/*
		<UtilsCookies v-if="!hasAcceptedCookies" @aceptedCookies="acceptCookies" />
		 */}
      </div>
    </>
  )
}
