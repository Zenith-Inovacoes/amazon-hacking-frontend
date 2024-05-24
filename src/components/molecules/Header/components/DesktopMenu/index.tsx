import { useMenu } from '@/contexts/menu'
import { DesktopMenuProps } from './types'
import Image from 'next/image'
import { cn } from '@/services/utils/className.utils'
import * as Dialog from '@radix-ui/react-dialog'
import { IoCloseOutline } from 'react-icons/io5'
import { Link, Badge } from '@/components/atoms'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

const DesktopMenu = ({ email, image, name }: DesktopMenuProps) => {
  const names = name?.split(' ') as string[]
  const uName: string = names[0] + ' ' + names[names.length - 1]

  const { open, handleOpenChange } = useMenu()

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className='relative w-fit xl:w-full h-fit right-0 top-0 z-50 transition-opacity duraiton-200 ease-linear hidden lg:flex xl:justify-end xl:flex xl:items-center xl:gap-2'>
        <div className='relative w-[48px] h-[48px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0'>
          <div className='relative w-12 h-12 rounded-full overflow-hidden'>
            <Image src={image || ''} alt='Imagem do perfil do usuário' fill />
          </div>
        </div>
        <span className='font-bold text-base tracking-[0.32px] text-nowrap text-white z-50 hidden xl:block w-[15ch] text-start truncate'>
          {uName}
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed w-full h-full top-0 lg:flex bg-black bg-opacity-40 data-[state=open]:animate-menuOverlayShow data-[state=closed]:animate-desktopMenuOverlayHide overflow-y-auto hidden z-50 justify-center'>
          <div className='relative flex items-start justify-end h-fit w-full max-w-screen-2xl'>
            <div
              className={cn(
                'fixed w-[48px] h-[48px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0 z-50 mt-11',
                open
                  ? 'animate-iconOpen mr-[247px] xl:animate-iconOpenXL'
                  : 'animate-iconClose mr-[62px] xl:mr-[230px] xl:animate-iconCloseXL'
              )}
            >
              <div className='absolute w-12 h-12 rounded-full overflow-hidden'>
                <Image
                  src={image || ''}
                  alt='Imagem do perfil do usuário'
                  fill
                />
              </div>
            </div>
            <div className='absolute flex flex-col'>
              <span
                className={cn(
                  'relative  mt-11 mr-[230px] right-0 translate-x-full font-bold text-base tracking-[0.32px] text-nowrap text-white z-50',
                  open ? 'animate-overlayShow' : 'animate-overlayHide opacity-0'
                )}
              >
                {uName}
              </span>
              <span
                title={email as string}
                className={cn(
                  'absolute font-medium tracking-[0.2px] text-xs truncate w-full max-w-[22ch] text-white z-50 mt-[70px] right-0 mr-[230px] translate-x-full',
                  open
                    ? 'animate-overlayShow'
                    : 'animate-overlayHide opacity-0'
                )}
              >
                {email}
              </span>
            </div>
            <Dialog.Close
              className={cn(
                'absolute w-fit h-fit inset-0 top-0 left-[100%] z-10 opacity-0 transition-all duration-200 ease-linear -translate-x-[calc(100%+20px)] mt-5 hidden lg:block bg-white text-black rounded-full',
                open && 'z-50 pointer-events-auto opacity-100 '
              )}
            >
              <IoCloseOutline size={31} />
            </Dialog.Close>
            <Dialog.Content
              className='relative data-[state=open]:animate-desktopMenuOpen data-[state=closed]:animate-desktopMenuClose'
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className='flex flex-col items-start justify-start bg-black w-[330px] h-fit rounded-b-[30px] py-10 px-8 gap-10'>
                <div className='flex flex-col items-start justify-start gap-[18px] pt-[88px]'>
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
                    onClick={(e) => {
                      e.preventDefault()
                      signOut()
                    }}
                  >
                    Sair
                  </Link>
                </div>
              </div>
            </Dialog.Content>
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DesktopMenu
