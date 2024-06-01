'use client'

import ReactQueryProvider from '@/contexts/ReactQueryProvider'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import MenuProvider from '@/contexts/menu'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
          <MenuProvider>{children}</MenuProvider>
      </ReactQueryProvider>
    </SessionProvider>
  )
}
