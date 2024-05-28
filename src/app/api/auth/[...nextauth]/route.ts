import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '@/services/libs/env.mjs'
import { session } from '@/services/libs/session'

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn() {
            return true
        },
        session,
    },
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
