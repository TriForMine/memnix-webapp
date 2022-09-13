import { useTranslations } from 'next-intl'
import NextLink from 'next/link'

export default function IndexLogin({
  loginPageEvent,
}: {
  loginPageEvent: () => void
}) {
  const t = useTranslations()

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-md">
      <div className="px-6 py-4">
        <h2 className="text-center text-3xl font-medium">
          {t('welcome_back')}
        </h2>
        <form>
          <div className="mt-4 w-full">
            <input
              placeholder={t('email')}
              aria-label="Email Address"
              className="input-neutral input input-bordered input-ghost w-full"
              type="email"
            />
          </div>

          <div className="mt-4 w-full">
            <input
              placeholder={t('password')}
              aria-label="Password"
              className="input-neutral input input-bordered input-ghost w-full"
              type="password"
            />
          </div>

          <div className="mt-4 flex w-full justify-center">
            <button
              className="hoveranimation btn btn-primary w-full"
              type="submit"
            >
              {t('login')}
            </button>
          </div>
        </form>
      </div>
      <div className="divider"></div>
      <div className="mt-2 mb-5 grid grid-cols-2 items-center justify-between gap-4 px-6 text-center">
        <div>
          <button
            className="btn-neutral hoveranimation btn mx-auto w-full"
            type="button"
            onClick={loginPageEvent}
          >
            {t('register')}
          </button>
        </div>
        <div>
          <NextLink href="/resetpassword">
            <button
              className="hoveranimation btn btn-secondary w-full"
              type="button"
            >
              {t('forget_password')}
            </button>
          </NextLink>
        </div>
      </div>
    </div>
  )
}
