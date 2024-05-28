'use client'

import { useMenu } from '@/contexts/menu'
import { DesktopMenuProps } from './types'
import Image from 'next/image'
import { cn } from '@/services/utils/className.utils'
import { IoCloseOutline } from 'react-icons/io5'
import { Link, Badge, Button } from '@/components/atoms'
import { signOut } from 'next-auth/react'
import { locales } from '@/services/utils/locale.utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sections } from '@/constants/sections'
import { scrollTo } from '@/services/utils/scrollTo'

const DesktopMenu = ({ data }: DesktopMenuProps) => {
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale ||
            'en'
    )

    let uName: string = ''

    if (data) {
        const names = (data.user?.name as string).split(' ') as string[]
        uName = names[0] + ' ' + names[names.length - 1]
    }

    const { open, handleOpenChange, setOpen } = useMenu()
    const [block, setBlock] = useState<boolean>(false)

    useEffect(() => {
        if (open) setBlock(true)
    }, [open])

    return (
        <div className='relative flex justify-end items-center w-full h-full max-w-screen-2xl'>
            <button
                className={cn(
                    'relative w-fit h-fit z-50 transition-transform duration-300 ease-in-out flex items-center justify-center gap-5',
                    open &&
                        '-translate-x-[140px] xl:-translate-x-[75px] translate-y-4 pointer-events-none'
                )}
                onClick={handleOpenChange}
            >
                <div className='w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                        <Image
                            src={data?.user?.image || ''}
                            alt='Imagem do perfil do usuário'
                            fill
                        />
                    </div>
                </div>
                <span
                    title={uName}
                    className={cn(
                        'font-bold text-base tracking-[0.32px] text-nowrap text-white z-50 text-start truncate w-[15ch] pointer-events-none transition-all duration-300 ease-in-out -mr-[calc(15ch+20px)] xl:mr-0 opacity-0 xl:opacity-100 xl:pointer-events-auto',
                        open &&
                            '-translate-y-1/2 pointer-events-auto mr-0 opacity-100'
                    )}
                >
                    {uName}
                </span>
                <span
                    title={data?.user?.email as string}
                    className={cn(
                        'absolute left-[72px] font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] opacity-0 pointer-events-none transition-all duration-300 ease-in-out',
                        open &&
                            'translate-y-1/2 opacity-100 pointer-events-auto'
                    )}
                >
                    {data?.user?.email}
                </span>
            </button>

            <div
                className={cn(
                    'hidden fixed bg-black w-screen min-h-screen bg-transparent transition-colors duration-300 ease-in-out opacity-40 inset-0',
                    open && 'bg-black',
                    block && 'block'
                )}
                onClick={() => setOpen((currState) => currState && !currState)}
                onTransitionEnd={() => setBlock(false)}
            />
            <div
                className={cn(
                    'fixed top-0 flex bg-black rounded-b-[30px] w-[330px] h-[363px] transition-transform duration-300 ease-in-out transform pb-12 pt-[155px] px-8 right-0 xl:right-auto',
                    open
                        ? 'translate-y-0 z-40 translate-x-0'
                        : '-translate-y-full'
                )}
                tabIndex={open ? 0 : -1}
            >
                <button
                    className='absolute w-fit h-fit right-5 top-5 bg-white text-black rounded-full'
                    onClick={handleOpenChange}
                >
                    <IoCloseOutline size={31} />
                </button>
                <div className='flex flex-col items-start justify-start gap-[18px]'>
                    <div className='flex gap-[10px] items-center justify-center'>
                        <Link
                            href={`${locale}/students`}
                            className='font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50'
                        >
                            {locale === 'en' ? 'Student area' : 'Área do aluno'}
                        </Link>
                        <Badge>{locale === 'en' ? 'Soon' : 'Em breve'}</Badge>
                    </div>
                    <Link
                        href='https://www.sympla.com.br/eventos?s=computacao-amostra-xx'
                        target='_blank'
                        className='font-medium text-20 tracking-[0.24px] text-white'
                    >
                        {locale === 'en' ? 'Tickets' : 'Ingressos'}
                    </Link>
                    <Link
                        href='https://drive.google.com/drive/u/2/folders/1DkP687BP4TZV7zYQr9_l7bVGKr_awJUW'
                        target='_blank'
                        className='font-medium text-20 tracking-[0.24px] text-white'
                    >
                        {locale === 'en' ? 'Schedule' : 'Programação'}
                    </Link>
                    <Link
                        href={`${locale}/logout`}
                        className='font-medium text-20 tracking-[0.24px] text-white'
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                    >
                        {locale === 'en' ? 'Logout' : 'Sair'}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DesktopMenu
