'use client'

import { Button, Link, LogoButton } from '@/components/atoms'
import { Menu } from '@/components/molecules'
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import LoginButton from '../Menu/Unlogged/LoginButton'

const Header = () => {
  const { open } = useMenu()

  return (
    <header className='sticky w-full h-fit top-[62px] md:top-[42px] flex justify-center items-start'>
      <div className=' flex w-full h-fit flex-row items-center justify-between max-w-screen-2xl'>
        <div
          className={cn(
            'pl-4 xs:pl-[42px] md:pl-[62px] duration-200 transition-opacity -mx-6',
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
