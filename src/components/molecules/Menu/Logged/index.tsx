'use client'

import { IoCloseOutline } from 'react-icons/io5'
import Image from 'next/image'
import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import { Button } from '@/components/atoms'
import { LoggedMenuProps } from './types'
import * as Dialog from '@radix-ui/react-dialog'

const Logged = ({ name, email, image, ...props }: LoggedMenuProps) => {
  return (
    <Dialog.Root>
      <div
        className='relative flex rounded-b-[30px] h-screen w-[min(364px,100%)] flex-shrink-0 flex-col items-start justify-start py-20 px-14 gap-10'
        {...props}
      >
        <IoCloseOutline size={46} className='absolute top-10 right-6' />
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
          <span className='font-medium text-20 tracking-[0.24px] text-white'>
            Área do aluno
          </span>
          <span className='font-medium text-20 tracking-[0.24px] text-white'>
            Ingressos
          </span>
          <span className='font-medium text-20 tracking-[0.24px] text-white'>
            Programação
          </span>
          <span className='font-medium text-20 tracking-[0.24px] text-white'>
            Sair
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center'>
            <Image
              src={image!}
              alt='Imagem do perfil do usuário'
              className='w-12 h-12 rounded-full'
            />
          </div>
          <span>{name}</span>
        </div>
      </div>
    </Dialog.Root>
  )
}

export default Logged
