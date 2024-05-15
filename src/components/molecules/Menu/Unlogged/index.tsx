'use client'

import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import Image from 'next/image'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import { Button, Link } from '@/components/atoms'
import LoginButton from './LoginButton'
import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/services/utils/className.utils'

const Unlogged = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className='sticky w-fit h-fit left-[100vw] top-0 z-50 mr-6 mt-9 transition-opacity duraiton-200 ease-linear data-[state=open]:opacity-0'>
        <IoMenu size={46} />
      </Dialog.Trigger>
      <Dialog.Close
        className={cn(
          'sticky w-fit inset-0 h-fit left-[100vw] top-0 z-10 mr-6 mt-9 opacity-0 transition-all duration-200 ease-linear',
          open && 'z-50 pointer-events-auto opacity-100'
        )}
      >
        <IoCloseOutline size={46} />
      </Dialog.Close>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed w-full h-full top-0 flex justify-end bg-black bg-opacity-40 data-[state=open]:animate-menuOverlayShow data-[state=closed]:animate-menuOverlayHide overflow-y-auto'>
          <Dialog.Content
            className='data-[state=open]:animate-menuOpen data-[state=closed]:animate-menuClose'
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className='flex flex-col items-start justify-start bg-black w-[min(364px,100vw)] md:w-[405px] h-fit rounded-l-[30px] py-20 px-14 min-h-screen md:min-h-[806px] gap-10'>
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Unlogged
