'use client'

import { Button, Link, LogoButton } from '@/components/atoms'
import Menu from '../Menu'
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import LoginButton from '../Menu/Unlogged/LoginButton'
import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header = () => {
  const { open } = useMenu()
  const { scrollY } = useScroll()
  const [isDown, setIsDown] = useState<boolean>(false)

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
        'sticky w-full h-fit top-0 flex justify-center items-start transition-colors duration-500 rounded-b-[30px] overflow-hidden',
        isDown && 'bg-black'
      )}
    >
      <div className=' flex w-full h-fit flex-row items-center justify-between max-w-screen-2xl'>
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
          <Link className='text-base *:tracking-[0.192px]'>O PROGRAMA</Link>
          <Link className='text-base *:tracking-[0.192px]'>EDIÇÕES</Link>
          <Link className='text-base *:tracking-[0.192px]'>VENCEDORES</Link>
          <Link className='text-base *:tracking-[0.192px]'>
            PATRIOCINADORES
          </Link>
        </div>
        <div className='hidden lg:flex w-full h-fit items-center justify-between mr-[62px] max-w-[min(24.88vw,293.6px)]'>
          <Button variant='primary'>Ver Soluções</Button>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}

export default Header
