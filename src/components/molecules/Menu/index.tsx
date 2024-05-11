import Logged from './Logged'
import Unlogged from './Unlogged'
import { getUserSession } from '@/services/libs/session'

const Menu = async () => {
  const session = await getUserSession()

  return session ? (
    <Logged name={session.name} email={session.email} image={session.image} />
  ) : (
    <Unlogged />
  )
}

export default Menu
