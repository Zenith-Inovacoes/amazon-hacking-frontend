"use client"

import Separator from "@/components/atoms/Separator"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales } from "@/services/utils/locale.utils"
import { useState } from "react"

export default function Terms() {
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
      )

    return (
        <div className="h-4 flex items-center justify-center gap-4 md:gap-12 lg:gap-6">
            <Link
                className="text-xs text-white md:text-16"
                href={`${locale}/terms`}
            >
                {locale === "en" ? "Terms and conditions" : "Termos e condições"}
            </Link>
            <Separator orientation="vertical" />
            <Link
                className="text-xs text-white md:text-16"
                href={`${locale}/privacy-policy`}
            >
                {locale === "en" ? "Privacy policies" : "Políticas de privacidade"}
            </Link>
        </div>
    )
}