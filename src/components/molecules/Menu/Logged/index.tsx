'use client'

import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import { Button, Link, Badge } from '@/components/atoms'
import { LoggedMenuProps } from './types'
import { cn } from '@/services/utils/className.utils'
import { useState } from 'react'

const Logged = ({ name, email, image, ...props }: LoggedMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      className='sticky w-full h-full flex items-center justify-end'
      {...props}
    >
      <div
        className={cn(
          'relative h-full max-h-screen w-[min(364px,100%)] md:w-[405px] overflow-y-scroll z-50 hide-menu-scrollbar',
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
          <Image src={AmazonHackingLogo} alt='Amazon Hacking Logo' />
          <div className='flex flex-col items-start justify-start gap-[18px]'>
            <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
              Menu
            </h2>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              O Programa
            </Link>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              Edições
            </Link>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              Vencedores
            </Link>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
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
            <div className='flex gap-[10px] items-center justify-center'>
              <Link className='font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50'>
                Área do aluno
              </Link>
              <Badge>Em Breve</Badge>
            </div>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              Ingressos
            </Link>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              Programação
            </Link>
            <Link
              href='/'
              className='font-medium text-20 tracking-[0.24px] text-white'
            >
              Sair
            </Link>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <div className='w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center'>
              <Image
                src={image!}
                alt='Imagem do perfil do usuário'
                className='w-12 h-12 rounded-full'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-base tracking-[0.32px]'>
                {name}
              </span>
              <span
                title={email as string}
                className='font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] xs:max-w-[30ch]'
              >
                {email}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'bg-black opacity-0 w-full h-full absolute transition-opacity duration-200',
          open && 'opacity-40'
        )}
        onClick={() => setOpen((currState) => currState && false)}
      />
    </div>
  )
}

export default Logged
