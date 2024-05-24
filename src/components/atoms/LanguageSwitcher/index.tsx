"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import LanguageSwitcherProps from "./types"
import { forwardRef, Ref, useEffect, useState } from "react"
import { US, BR, ES } from 'country-flag-icons/react/3x2'
import { IoIosArrowDown } from "react-icons/io"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/services/utils/className.utils"

const locales = [
    {
        locale: "pt",
        label: "Português",
        flag: <BR title="Português" className="w-6 h-4 inline" />
    },
    {
        locale: "en",
        label: "English",
        flag: <US title="English" className="w-6 h-4 inline" />
    },
]

const LanguageSwitcher = forwardRef(({ className, ...props }: LanguageSwitcherProps, ref: Ref<HTMLButtonElement>) => {
    const pathname = usePathname()
    const router = useRouter()
    const [currentLanguage, setCurrentLanguage] = useState(locales[0])

    useEffect(() => {
        if (pathname) {
            const locale = pathname.split("/")[1]
            const language = locales.find(l => l.locale === locale)
            if (language) {
                setCurrentLanguage(language)
            }
        }
    }, [pathname])

    return (
        <SelectPrimitive.Root value={currentLanguage.locale} onValueChange={(value) => {
            router.push(`/${value}`)
            setCurrentLanguage(locales.find(locale => locale.locale === value)!)
        }} {...props}>
            <SelectPrimitive.Trigger ref={ref} className={cn("w-fit shadow-languageSwitcher tracking-normal focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-primary-100 min-w-14 overflow-hidden h-14 duration-700 max-w-14 hover:max-w-[200px] data-[state=open]:max-w-[200px] transition-maxWidth flex relative items-center gap-2 py-5 px-4 bg-black leading-4 text-base font-normal rounded-full group data-[state=open]:rounded-bl-none data-[state=open]:rounded-br-none data-[state=open]:rounded-tl-[24px] data-[state=open]:rounded-tr-[24px]", className)}>
                <SelectPrimitive.Value>
                    <div className="flex items-center whitespace-nowrap">
                        {currentLanguage.flag}
                        <span className="ml-2 opacity-0 group-data-[state=open]:visible group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-all duration-500">
                            {currentLanguage.label}
                        </span>
                        <SelectPrimitive.Icon asChild className="ml-2 group-data-[state=open]:visible opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 transition-all duration-500">
                            <IoIosArrowDown size={24} />
                        </SelectPrimitive.Icon>
                    </div>
                </SelectPrimitive.Value>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content className="min-w-[var(--radix-select-trigger-width)] shadow-languageSwitcher" position="popper">
                    <SelectPrimitive.Viewport>
                        {
                            locales.map((locale, index) => (
                                <SelectPrimitive.Item key={index} value={locale.locale} className="font-normal text-base leading-4 px-3 py-2 bg-neutrals-600 focus-visible:outline-none hover:bg-neutrals-700 focus-visible:bg-neutrals-700 transition-colors data-[state=checked]:hidden">
                                    <SelectPrimitive.ItemText className="flex items-center">
                                        {locale.flag}
                                        <span className="ml-2">
                                            {locale.label}
                                        </span>
                                    </SelectPrimitive.ItemText>
                                </SelectPrimitive.Item>
                            ))
                        }
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
})

LanguageSwitcher.displayName = "Language Switcher"

export default LanguageSwitcher