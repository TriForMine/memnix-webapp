import { useTranslations } from 'next-intl'

export const CoreSkeletonSection = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="mt-6 w-full">
        <div className="flex flex-row items-center justify-between">
          <h1 className="md:text-xl">{t('loading')}...</h1>
        </div>
        <div className="rounded-box flex flex-row space-x-1 pt-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="carousel-item h-32 w-28 animate-pulse md:h-48 md:w-44 lg:h-72 lg:w-72"
            >
              <div className="flex flex-col justify-center">
                <div className="rounded-box relative bg-neutral">
                  <svg
                    className="absolute inset-0 m-auto h-7 w-7 animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
