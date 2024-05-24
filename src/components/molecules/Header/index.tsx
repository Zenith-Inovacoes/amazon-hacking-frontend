'use client'

import { Button, Link } from '@/components/atoms'
import NextLink from 'next/link'
import Menu from '../Menu'
import LoginButton from '../Menu/Unlogged/LoginButton'
import HeaderLogic from './components/HeaderLogic'
import { usePathname } from 'next/navigation'
import { locales } from '@/services/utils/locale.utils'
import { useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
  )

  return (
    <HeaderLogic>
      <div className='lg:hidden'>
        <Menu />
      </div>
      <div className='hidden lg:flex w-fit h-fit items-center justify-between flex-1 max-w-[570px] mx-2 gap-2'>
        <Link className='text-base *:tracking-[0.192px]'>
          {locale === 'en' ? 'THE PROGRAM' : 'O PROGRAMA'}
        </Link>
        <Link className='text-base *:tracking-[0.192px]'>
          {locale === 'en' ? 'EDITIONS' : 'EDIÇÕES'}
        </Link>
        <Link className='text-base *:tracking-[0.192px]'>
          {locale === 'en' ? 'WINNERS' : 'VENCEDORES'}
        </Link>
        <Link className='text-base *:tracking-[0.192px]'>
          {locale === 'en' ? 'PARTNERS' : 'PATROCINADORES'}
        </Link>
      </div>
      <div className='hidden lg:flex w-full h-fit items-center justify-between mr-[62px] max-w-[min(24.88vw,293.6px)]'>
        <Button asChild variant='primary'>
          <NextLink href='solutions'>Ver Soluções</NextLink>
        </Button>
        <LoginButton />
      </div>
    </HeaderLogic>
  )
}

export default Header
