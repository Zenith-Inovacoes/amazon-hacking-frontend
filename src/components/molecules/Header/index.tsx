'use client'

import { Button, Link, LogoButton } from '@/components/atoms'
import Menu from '../Menu'
import NextLink from "next/link"
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import LoginButton from '../Menu/Unlogged/LoginButton'
import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import DesktopMenu from './components/DesktopMenu'
import { locales } from '@/services/utils/locale.utils'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
  )
  const { open } = useMenu()
  const { scrollY } = useScroll()
  const [isDown, setIsDown] = useState<boolean>(false)
  const { data } = useSession()

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollYValue = window.scrollY

      if (!isDown && scrollYValue >= 60) setIsDown(true)
      else if (isDown && scrollYValue < 60) setIsDown(false)
    }, 100)

    return () => clearInterval(interval)
  }, [isDown, scrollY])

  return (
    <header
      className={cn(
        'fixed w-full h-fit top-0 flex justify-center items-start transition-colors duration-500 rounded-b-[30px] overflow-hidden z-30',
        isDown && 'bg-black'
      )}
    >
      <div className='relative flex w-full h-fit flex-row items-center justify-between max-w-screen-2xl'>
        <div
          className={cn(
            'pl-4 xs:pl-[42px] md:pl-[62px] duration-200 transition-opacity sm:-mx-6 scale-[0.532] sm:scale-100 origin-left',
            open && 'opacity-0'
          )}
        >
          <LogoButton />
        </div>
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
        <div
          className={cn(
            'hidden lg:flex w-full h-fit items-center justify-between mr-[62px] max-w-[min(24.88vw,293.6px)] relative',
            data && 'max-w-[215px] xl:max-w-[380px]'
          )}
        >
          <Button asChild variant='primary'>
            <NextLink href={`/${locale}/solutions`}>
            {locale === 'en' ? 'SOLUTIONS' : 'VER SOLUÇÕES'}
            </NextLink>
          </Button>
          {!data ? (
            <LoginButton />
          ) : (
            <DesktopMenu
              name={data.user?.name}
              email={data.user?.email}
              image={data.user?.image}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
