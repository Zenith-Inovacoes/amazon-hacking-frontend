'use client'

import { Button, Link, LogoButton } from '@/components/atoms'
import Menu from '../../../Menu'
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import LoginButton from '../../../Menu/Unlogged/LoginButton'
import { useScroll } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import DesktopMenu from '../DesktopMenu'
import { scrollTo } from '@/services/utils/scrollTo'

const HeaderLogic = ({children}: {children: ReactNode}) => {
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
        'fixed w-full h-fit top-0 flex justify-center items-start transition-colors duration-500 rounded-b-[30px] overflow-hidden z-30',
        isDown && 'bg-black'
      )}
    >
      <div className='relative flex w-full h-fit flex-row items-center justify-between max-w-screen-2xl'>
        <div
        onClick={() => scrollTo('hero')} 
          className={cn(
            'pl-4 xs:pl-[42px] md:pl-[62px] duration-200 transition-opacity sm:-mx-6 scale-[0.532] sm:scale-100 origin-left',
            open && 'opacity-0'
          )}
        >
          <LogoButton />
        </div>
        {children}
      </div>
    </header>
  )
}

export default HeaderLogic
