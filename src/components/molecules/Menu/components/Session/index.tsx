"use client"

import { signOut, useSession } from "next-auth/react"
import LoginButton from "../../Unlogged/LoginButton"
import Image from "next/image"
import { Link, Badge } from '@/components/atoms';
import { locales } from "@/services/utils/locale.utils"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Session() {

    const pathname = usePathname();
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
    );
    const { data: session, status } = useSession()
    const names = session?.user?.name?.split(' ') as string[];
    const uName: string = names[0] + ' ' + names[names.length - 1];

    return (
        <>
            {
                status === 'unauthenticated' && <div className='flex flex-col items-start justify-start gap-[18px]'>
                    <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                        Login
                    </h2>
                    <LoginButton />
                </div>
            }
            {
                status === 'authenticated' && <>
                    <div className="flex flex-col items-start justify-start gap-[18px]">
                        <div className="flex gap-[10px] items-center justify-center">
                            <Link className="font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50">
                                {locale === 'en' ? 'Student Area' : 'Área do Aluno'}
                            </Link>
                            <Badge>{locale === 'en' ? 'Soon' : 'Em Breve'}</Badge>
                        </div>
                        <Link
                            href="/"
                            className="font-medium text-20 tracking-[0.24px] text-white"
                        >
                            {locale === 'en' ? 'Tickets' : 'Ingressos'}
                        </Link>
                        <Link
                            href="/"
                            className="font-medium text-20 tracking-[0.24px] text-white"
                        >
                            {locale === 'en' ? 'Schedule' : 'Programação'}
                        </Link>
                        <Link
                            href="/"
                            className="font-medium text-20 tracking-[0.24px] text-white"
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                            }}
                        >
                            {locale === 'en' ? 'Logout' : 'Sair'}
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <div className="w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={session.user?.image || ''}
                                    alt="Imagem do perfil do usuário"
                                    fill
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-base tracking-[0.32px]">
                                {uName}
                            </span>
                            <span
                                title={session.user?.email as string}
                                className="font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] xs:max-w-[30ch]"
                            >
                                {session.user?.email}
                            </span>
                        </div>
                    </div>
                </>
            }
        </>
    )
}