'use client'

import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import Image from 'next/image'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import { Button, Link } from '@/components/atoms'
import LoginButton from './LoginButton'
import { useState } from 'react'
import { cn } from '@/services/utils/className.utils'

const Unlogged = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='sticky w-full h-full flex items-center justify-end'>
      <div
        className={cn(
          'relative h-screen w-[min(364px,100%)] md:w-[405px] overflow-hidden z-50 hide-menu-scrollbar',
          open && 'overflow-y-scroll'
        )}
      >
        <button
          className='absolute top-10 right-[70px] z-50'
          onClick={() => setOpen((currState) => !currState)}
        >
          <IoCloseOutline
            size={46}
            className={cn(
              'absolute opacity-100 transition-opacity duration-200 ease-linear',
              !open && 'opacity-0'
            )}
          />
          <IoMenu
            size={46}
            className={cn(
              'absolute opacity-100 transition-opacity duration-200 ease-linear',
              open && 'opacity-0'
            )}
          />
        </button>
        <div
          className={cn(
            'relative flex bg-black rounded-l-[30px] h-full w-full flex-col items-start justify-start gap-10 py-20 px-14 transition-transform duration-300 ease-in-out translate-x-full',
            open && 'translate-x-0'
          )}
        >
          <button>
            <Image src={AmazonHackingLogo} alt='Amazon Hacking Logo' />
          </button>
          <div className='flex flex-col items-start justify-start gap-[18px]'>
            <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
              Menu
            </h2>
            <Link className='font-medium text-20 tracking-[0.24px] text-white'>
              O Programa
            </Link>
            <Link className='font-medium text-20 tracking-[0.24px] text-white'>
              Edições
            </Link>
            <Link className='font-medium text-20 tracking-[0.24px] text-white'>
              Vencedores
            </Link>
            <Link className='font-medium text-20 tracking-[0.24px] text-white'>
              Patrocinadores
            </Link>
          </div>

          <div className='flex flex-col items-start justify-start gap-[18px]'>
            <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
              Projetos
            </h2>
            <Button>Ver Soluções</Button>
          </div>

          <div className='flex flex-col items-start justify-start gap-[18px]'>
            <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
              Login
            </h2>
            <LoginButton />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'bg-black opacity-0 w-full h-full absolute transition-opacity duration-200 inset-0',
          open && 'opacity-40'
        )}
        onClick={() => setOpen((currState) => currState && false)}
      />
    </div>
  )
}

export default Unlogged
