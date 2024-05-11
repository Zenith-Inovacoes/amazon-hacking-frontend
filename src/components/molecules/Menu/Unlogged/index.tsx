'use client'

import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import Image from 'next/image'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '@/components/atoms'
import LoginButton from './LoginButton'
import { cn } from '@/services/utils/className.utils'

const Unlogged = () => {
  return (
    <Dialog.Dialog>
      <div className='relative rounded-b-[30px] h-screen w-[min(364px,100%)] overflow-hidden'>
        <Dialog.Close asChild>
          <button className='absolute top-10 right-[70px] z-50'>
            <IoCloseOutline
              size={46}
              className={cn(
                'absolute opacity-100 transition-opacity duration-200 ease-linear'
              )}
            />
          </button>
        </Dialog.Close>
        <Dialog.Trigger asChild>
          <button className='absolute top-10 right-[70px] data-[state=closed]:z-50 z-40'>
            <IoMenu
              size={46}
              className={cn(
                'absolute opacity-100 transition-opacity duration-200 ease-linear'
              )}
            />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <div className='relative rounded-b-[30px] h-screen w-[min(364px,100%)] overflow-hidden'>
            <div
              className={cn(
                'flex bg-black rounded-b-[30px] h-full w-full flex-col items-start justify-start gap-10 py-20 px-14 transition-transform duration-300 ease-in-out'
              )}
            >
              <Image src={AmazonHackingLogo} alt='Amazon Hacking Logo' />
              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                  Menu
                </h2>
                <span className='font-medium text-20 tracking-[0.24px] text-white'>
                  O Programa
                </span>
                <span className='font-medium text-20 tracking-[0.24px] text-white'>
                  Edições
                </span>
                <span className='font-medium text-20 tracking-[0.24px] text-white'>
                  Vencedores
                </span>
                <span className='font-medium text-20 tracking-[0.24px] text-white'>
                  Patrocinadores
                </span>
              </div>

              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                  Projetos
                </h2>
                <Button>Soluções</Button>
              </div>

              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                  Login
                </h2>
                <LoginButton />
              </div>
            </div>
          </div>
        </Dialog.Portal>
      </div>
    </Dialog.Dialog>
  )
}

export default Unlogged
