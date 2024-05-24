"use client"

import { Checkbox, Select } from "@/components/atoms"
import { CourseEnum } from "@/types/IProject"
import { SelectItem } from '@/components/atoms/Select'
import WinnerCard from "../WinnerCard"
import { publicWinners } from "@/model/Winners"
import { useState } from "react"
import { locales } from "@/services/utils/locale.utils"
import { usePathname } from "next/navigation"

export default function CourseSelection() {
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
    );
    const copy = [
        {
            locale: "en",
            courses: [
                "Computer Engineering",
                "Computer Science"
            ],
            selectionText: "Choose a year:",
            buttonText: "Learn more"
        },
        {
            locale: "pt",
            courses: [
                "Engenharia de Computação",
                "Ciência de Computação"
            ],
            selectionText: "Escolha um ano:",
            buttonText: "Saiba mais"
        },
    ]

    const [selectedYear, setSelectedYear] = useState<number | null>(2023)
    const [selectedCourse, setSelectedCourse] = useState<CourseEnum>(
        CourseEnum.ECOMP
    )

    function onCheckboxClick(year: number) {
        if (year === selectedYear) {
            setSelectedYear(null)
        } else {
            setSelectedYear(year)
        }
    }

    function getWinnerProject() {
        return publicWinners.find(
            (winner) =>
                winner.year === selectedYear && winner.course === selectedCourse
        )!
    }

    return (
        <div className='flex flex-col items-center justify-center gap-6 z-10 relative w-full md:gap-20 lg:gap-8'>
            <div className='flex flex-col items-center justify-center gap-8 w-full md:flex-row-reverse md:justify-start md:gap-0 xl:gap-10 px-8 lg:px-0'>
                <div className='flex flex-col items-center justify-center gap-6 w-full md:w-fit'>
                    <span className='text-white text-36 font-semibold leading-40 text-right self-end z-10'>
                        {locale === "en" ? copy[0].selectionText : copy[1].selectionText}
                    </span>
                    <div className='flex self-end gap-6'>
                        <Checkbox
                            checked={selectedYear === 2023}
                            onChange={() => onCheckboxClick(2023)}
                        >
                            2023
                        </Checkbox>
                        <Checkbox
                            checked={selectedYear === 2022}
                            onChange={() => onCheckboxClick(2022)}
                        >
                            2022
                        </Checkbox>
                    </div>
                </div>
                <div className='self-end lg:self-center lg:flex-1 lg:pl-10 pb-10 md:pb-0'>
                    <Select
                        variant='light'
                        onValueChange={(value) =>
                            setSelectedCourse(value as CourseEnum)
                        }
                        defaultValue={CourseEnum.ECOMP}
                        placeholder='Selecione um curso'
                    >
                        <SelectItem value={CourseEnum.ECOMP}>
                            {locale === "en" ? copy[0].courses[0] : copy[1].courses[0]}
                        </SelectItem>
                        <SelectItem value={CourseEnum.BCC}>
                            {locale === "en" ? copy[0].courses[0] : copy[1].courses[0]}
                        </SelectItem>
                    </Select>
                </div>
            </div>
            <WinnerCard {...getWinnerProject()} />
        </div>
    )
}