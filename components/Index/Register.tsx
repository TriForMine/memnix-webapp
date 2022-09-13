import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, object, ref, string } from 'yup'
import { FieldValues } from 'react-hook-form/dist/types/fields'

export default function IndexRegister({
  registerPageEvent,
}: {
  registerPageEvent: () => void
}) {
  const t = useTranslations()

  const registerSchema = object({
    username: string()
      .required(t('username_required'))
      .min(4, ({ min }) => t(`username_min_length`, { min: min }))
      .max(15, ({ max }) => t(`username_max_length`, { max: max })),
    email: string()
      .required(t('email_required'))
      .email(t('email_invalid'))
      .max(100, ({ max }) => t('email_max_length', { max: max })),
    password: string()
      .required(t('password_required'))
      .min(6, ({ min }) => t(`password_min_length`, { min: min }))
      .max(50, ({ max }) => t('password_max_length', { max: max })),
    password_confirmation: string()
      .required(t('password_confirmation_required'))
      .min(6, ({ min }) => t(`password_min_length`, { min: min }))
      .max(50, ({ max }) => t('password_max_length', { max: max }))
      .oneOf([ref('password'), null], t('password_confirmation_mismatch')),
    tos: boolean().required(t('tos_required')).oneOf([true], t('tos_required')),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })
  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-xl">
      <div className="px-6 py-4">
        <h2 className="text-center text-3xl font-medium">
          {t('create_an_account')}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 w-full">
            <input
              placeholder={t('username')}
              aria-label="Username"
              className={`input-neutral input input-bordered input-ghost mb-3 w-full max-w-xs${
                errors.username ? ' input-error' : ''
              }`}
              type="text"
              {...register('username')}
            />
            {errors.username && (
              <p className="text-xs italic text-red-500">
                {errors.username.message as string}
              </p>
            )}
          </div>
          <div className="mt-4 w-full">
            <input
              placeholder={t('email')}
              aria-label="Email Address"
              className={`input-neutral input input-bordered input-ghost mb-3 w-full max-w-xs${
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
              className={`input-neutral input input-bordered input-ghost mb-3 w-full max-w-xs${
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
          <div className="mt-4 w-full">
            <input
              placeholder={t('confirm_password')}
              aria-label="Password"
              className={`input-neutral input input-bordered input-ghost mb-3 w-full max-w-xs${
                errors.password_confirmation ? ' input-error' : ''
              }`}
              type="password"
              {...register('password_confirmation')}
            />
            {errors.password_confirmation && (
              <p className="text-xs italic text-red-500">
                {errors.password_confirmation.message as string}
              </p>
            )}
          </div>
          <div className="mx-auto mt-4">
            <div className="flex flex-nowrap">
              <label className="label cursor-pointer">
                <input
                  className="checkbox checkbox-primary mb-3"
                  checked={false}
                  type="checkbox"
                  {...register('tos')}
                />
              </label>
              <span className="label-text my-auto">{t('accept_tos')}</span>
            </div>
            <p className="text-xs italic text-red-500">
              {errors.tos && (
                <p className="text-xs italic text-red-500">
                  {errors.tos.message as string}
                </p>
              )}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="hoveranimation btn btn-primary w-full"
              type="submit"
            >
              {t('register')}
            </button>
          </div>
        </form>
      </div>
      <div className="divider"></div>
      <div className="mb-2 flex items-center justify-center bg-base-100 py-4 px-6 text-center">
        <span className="mx-2 text-sm">{t('already_account')} </span>
        <button
          className="btn-neutral hoveranimation btn mx-auto"
          type="button"
          onClick={registerPageEvent}
        >
          {t('login')}
        </button>
      </div>
    </div>
  )
}
