import { Session } from 'next-auth'

export type MenuProps = {
    data: Session | null
    status: string
}
