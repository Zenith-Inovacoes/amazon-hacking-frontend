'use client'

import { SessionProvider } from 'next-auth/react'
import MenuProvider from '@/contexts/menu'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MenuProvider>{children}</MenuProvider>
    </SessionProvider>
  )
}
