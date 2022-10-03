import NextLink from 'next/link'

export const HeaderConnected = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <NextLink
          className="hoveranimation btn btn-ghost text-xl normal-case"
          href="/discover"
        >
          <h1 className="from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-4xl font-bold text-primary hover:animate-pulse dark:bg-gradient-to-r dark:text-transparent">
            Memnix
          </h1>
        </NextLink>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        {/*
        <UtilsThemeSwitcher />
        <UtilsLangSwitcher />
			   */}
      </div>
    </div>
  )
}
