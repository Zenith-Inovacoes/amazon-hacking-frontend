import NextAuth from 'next-auth/next'
import { authOptions } from '@/services/server/auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
