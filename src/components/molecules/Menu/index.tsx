'use client'

import Logged from './Logged'
import Unlogged from './Unlogged'
import { useSession } from 'next-auth/react'

const Menu = () => {
  const { data } = useSession()

  if (!data) return <Unlogged />

  return (
    <Logged
      name={data.user?.name}
      email={data.user?.email}
      image={data.user?.image}
    />
  )
}

export default Menu
