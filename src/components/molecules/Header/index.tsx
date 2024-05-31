'use client'

import { Button, Link } from '@/components/atoms'
import NextLink from 'next/link'
import HeaderLogic from './components/HeaderLogic'
import { usePathname } from 'next/navigation'
import { locales } from '@/services/utils/locale.utils'
import { useState } from 'react'
import { scrollTo } from '@/services/utils/scrollTo'
import { cn } from '@/services/utils/className.utils'
import { useSession } from 'next-auth/react'
import Menu from '../Menu'

const Header = () => {
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale ||
            'en'
    )

    const { data } = useSession()

    return (
        <HeaderLogic>
            <div className='lg:hidden'>
                <Menu data={data} />
            </div>

            <div className='hidden lg:flex w-fit h-fit items-center justify-between flex-1 max-w-[570px] mx-2 gap-2'>
                <Link
                    onClick={() => scrollTo('about')}
                    className={cn(
                        'text-base *:tracking-[0.192px] text-white',
                        locale !== 'en' && 'text-xs xl:text-base'
                    )}
                >
                    {locale === 'en' ? 'THE PROGRAM' : 'O PROGRAMA'}
                </Link>
                <Link
                    onClick={() => scrollTo('editions')}
                    className={cn(
                        'text-base *:tracking-[0.192px] text-white',
                        locale !== 'en' && 'text-xs xl:text-base'
                    )}
                >
                    {locale === 'en' ? 'EDITIONS' : 'EDIÇÕES'}
                </Link>
                <Link
                    onClick={() => scrollTo('winners')}
                    className={cn(
                        'text-base *:tracking-[0.192px] text-white',
                        locale !== 'en' && 'text-xs xl:text-base'
                    )}
                >
                    {locale === 'en' ? 'WINNERS' : 'VENCEDORES'}
                </Link>
                <Link
                    onClick={() => scrollTo('partners')}
                    className={cn(
                        'text-base *:tracking-[0.192px] text-white',
                        locale !== 'en' && 'text-xs xl:text-base'
                    )}
                >
                    {locale === 'en' ? 'PARTNERS' : 'PATROCINADORES'}
                </Link>
            </div>

            <div className='hidden lg:flex w-fit h-fit items-center justify-center mr-[62px] gap-4'>
                <Button asChild variant='primary'>
                    <NextLink href={`${locale}/solutions`}>
                        {locale === 'en' ? 'See Solutions' : 'Ver Soluções'}
                    </NextLink>
                </Button>
                <Button asChild variant='secondary'>
                    <NextLink
                        href='https://linktr.ee/computacaoamostra'
                        target='_blank'
                    >
                        {locale === 'en'
                            ? 'Tickets and Schedule'
                            : 'Ingressos e Programação'}
                    </NextLink>
                </Button>
            </div>
        </HeaderLogic>
    )
}

export default Header
