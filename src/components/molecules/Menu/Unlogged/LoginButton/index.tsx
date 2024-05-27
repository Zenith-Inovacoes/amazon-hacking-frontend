'use client'

import { Button } from '@/components/atoms'
import { locales } from '@/services/utils/locale.utils'
import { signIn } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const LoginButton = () => {
  const pathname = usePathname()
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
  )

  return (
    <Button variant='secondary' onClick={() => signIn()}>
      {locale === 'en' ? "Login" : "Fazer login"}
    </Button>
  )
}

export default LoginButton
