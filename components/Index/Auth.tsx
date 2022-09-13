import { useState } from 'react'
import IndexLogin from './Login'
import IndexRegister from './Register'

export default function IndexAuth() {
  const [page, setPage] = useState<number>(0)

  if (page === 0) {
    return <IndexLogin loginPageEvent={() => setPage(1)} />
  } else {
    return <IndexRegister registerPageEvent={() => setPage(0)} />
  }
}
