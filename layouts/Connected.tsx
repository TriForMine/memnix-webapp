import { ReactElement, useEffect } from 'react'
import { HeaderConnected } from '../components/Utils/HeaderConnected'
import { BottomNavigation } from '../components/Utils/BottomNavigation'

export const Connected = ({ children }: { children: ReactElement }) => {
  useEffect(() => {
    document.body.className = 'no-scrollbar'
  })

  return (
    <>
      <div id="app-layout">
        <HeaderConnected />
        <main>{children}</main>
        <BottomNavigation />
      </div>
    </>
  )
}
