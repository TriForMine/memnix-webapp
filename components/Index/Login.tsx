import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import { useState } from 'react'
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues } from 'react-hook-form/dist/types/fields'
import { loginUser } from '../../utils/api'
import Router from 'next/router'

export default function IndexLogin({
  loginPageEvent,
}: {
  loginPageEvent: () => void
}) {
  const [submitting, setSubmitting] = useState(false)
  const t = useTranslations()

  const loginSchema = object({
    email: string()
      .required(t('email_required'))
      .email(t('email_invalid'))
      .max(100, ({ max }) => t('email_max_length', { max: max })),
    password: string()
      .required(t('password_required'))
      .min(6, ({ min }) => t(`password_min_length`, { min: min }))
      .max(50, ({ max }) => t('password_max_length', { max: max })),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const onSubmit = async (data: FieldValues) => {
    setSubmitting(true)
    if (!(await loginSchema.isValid(data))) {
      return
    }

    const loginResult = await loginUser(data.email, data.password)
    if (loginResult) {
      await Router.push('/home')
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-md">
      <div className="px-6 py-4">
        <h2 className="text-center text-3xl font-medium">
          {t('welcome_back')}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 w-full">
            <input
              placeholder={t('email')}
              aria-label="Email Address"
              className={`input-neutral input input-bordered input-ghost w-full${
                errors.email ? ' input-error' : ''
              }`}
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="mt-4 w-full">
            <input
              placeholder={t('password')}
              aria-label="Password"
              className={`input-neutral input input-bordered input-ghost w-full${
                errors.password ? ' input-error' : ''
              }`}
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-xs italic text-red-500">
                {errors.password.message as string}
              </p>
            )}
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
