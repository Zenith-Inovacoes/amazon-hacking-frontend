import Logged from './Logged'
import Unlogged from './Unlogged'
import { getUserSession } from '@/services/libs/session'

const Menu = async () => {
  const session = await getUserSession()

  if (!session) return <Unlogged />

  return (
    <Logged name={session.name} email={session.email} image={session.image} />
  )
}

export default Menu
