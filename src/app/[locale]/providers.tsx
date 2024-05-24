'use client'

import ReactQueryProvider from '@/contexts/ReactQueryProvider'
import { SessionProvider } from 'next-auth/react'
import { GenerateSessionProvider } from '@/contexts/SessionProvider'
import { ReactNode } from 'react'
import MenuProvider from '@/contexts/menu'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <GenerateSessionProvider>
            <MenuProvider>
              {children}
            </MenuProvider>
        </GenerateSessionProvider>
      </ReactQueryProvider>
    </SessionProvider>
  )
}
