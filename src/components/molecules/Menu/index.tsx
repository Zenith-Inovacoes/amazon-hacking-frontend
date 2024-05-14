import Logged from './Logged'
import Unlogged from './Unlogged'
import { getUserSession } from '@/services/libs/session'

const Menu = async () => {
  const session = await getUserSession()

  if (!session) return <Unlogged />

  const names = session.name?.split(' ') as string[]
  const name = names[0] + ' ' + names[names.length - 1]

  return <Logged name={name} email={session.email} image={session.image} />
}

export default Menu
