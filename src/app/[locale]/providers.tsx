'use client'

import ReactQueryProvider from '@/contexts/ReactQueryProvider'
import { SessionProvider } from 'next-auth/react'
import { GenerateSessionProvider } from '@/contexts/SessionProvider'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <GenerateSessionProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </GenerateSessionProvider>
      </ReactQueryProvider>
    </SessionProvider>
  )
}
