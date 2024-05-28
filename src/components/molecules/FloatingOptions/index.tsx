'use client'

import { FloatingButton } from '@/components/atoms'
import { LanguageSwitcher } from '@/components/atoms'
import { locales } from '@/services/utils/locale.utils'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function FloatingOptions() {
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale ||
            'en'
    )

    return (
        <div className='fixed z-50 w-fit bottom-10 right-10 flex flex-col justify-center items-end gap-6'>
            <LanguageSwitcher />
            <FloatingButton
                href='https://linktr.ee/computacaoamostra'
                target='_blank'
            />
        </div>
    )
}
