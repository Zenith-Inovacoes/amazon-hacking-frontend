'use client'

import { Checkbox, Overlay, Select, Button } from "@/components/atoms"
import { Link } from "@/components/atoms"
import { SelectItem } from "@/components/atoms/Select"
import WinnerCard from "./components/WinnerCard"
import { publicWinners } from "@/model/Winners"
import { useState } from "react"
import { CourseEnum } from "@/types/IProject"
import WavePublicPrize from "public/images/Wave-Public-Prize.svg"
import WavePublicPrizeDesktop from "public/images/Public-Prize-Wave-Dk.svg"
import Image from "next/image"
import PublicPrizeOverlay from "./components/PublicPrizeOverlay"

const Wave = () => {
    return (
        <svg id="public-prize-wave" className="rotate-180 duration-300" viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="public-prize-wave-gradient" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(0, 81, 148, 1)" offset="0%"></stop>
                    <stop stopColor="rgba(0, 81, 148, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path className="translate-x-0 translate-y-0 opacity-100" fill="url(#public-prize-wave-gradient)" d="M0,0L120,8.7C240,17,480,35,720,60.7C960,87,1200,121,1440,151.7C1680,182,1920,208,2160,212.3C2400,217,2640,199,2880,173.3C3120,147,3360,113,3600,112.7C3840,113,4080,147,4320,143C4560,139,4800,95,5040,69.3C5280,43,5520,35,5760,60.7C6000,87,6240,147,6480,143C6720,139,6960,69,7200,39C7440,9,7680,17,7920,43.3C8160,69,8400,113,8640,138.7C8880,165,9120,173,9360,147.3C9600,121,9840,61,10080,65C10320,69,10560,139,10800,156C11040,173,11280,139,11520,121.3C11760,104,12000,104,12240,125.7C12480,147,12720,191,12960,186.3C13200,182,13440,130,13680,104C13920,78,14160,78,14400,95.3C14640,113,14880,147,15120,134.3C15360,121,15600,61,15840,60.7C16080,61,16320,121,16560,134.3C16800,147,17040,113,17160,95.3L17280,78L17280,260L17160,260C17040,260,16800,260,16560,260C16320,260,16080,260,15840,260C15600,260,15360,260,15120,260C14880,260,14640,260,14400,260C14160,260,13920,260,13680,260C13440,260,13200,260,12960,260C12720,260,12480,260,12240,260C12000,260,11760,260,11520,260C11280,260,11040,260,10800,260C10560,260,10320,260,10080,260C9840,260,9600,260,9360,260C9120,260,8880,260,8640,260C8400,260,8160,260,7920,260C7680,260,7440,260,7200,260C6960,260,6720,260,6480,260C6240,260,6000,260,5760,260C5520,260,5280,260,5040,260C4800,260,4560,260,4320,260C4080,260,3840,260,3600,260C3360,260,3120,260,2880,260C2640,260,2400,260,2160,260C1920,260,1680,260,1440,260C1200,260,960,260,720,260C480,260,240,260,120,260L0,260Z"></path>
        </svg>
    )
}

export default function PublicPrize() {
    const [selectedYear, setSelectedYear] = useState<number | null>(2023)
    const [selectedCourse, setSelectedCourse] = useState<CourseEnum>(CourseEnum.ECOMP)

    // bg-[url('/images/Wave-Public-Prize.svg')]

    function onCheckboxClick(year: number) {
        if (year === selectedYear) {
            setSelectedYear(null)
        } else {
            setSelectedYear(year)
        }
    }

    function getWinnerProject() {
        return publicWinners.find(winner => winner.year === selectedYear && winner.course === selectedCourse)!
    }

    return (
        <section className="relative bg-white before:absolute before:bg-white before:w-full before:h-4 before:-translate-y-1">
            <div className="lg:flex justify-center items-center relative max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-5 z-10 flex-1 lg:z-0">
                    <div className="flex flex-col gap-5 px-8">
                        <h3 className="text-black font-bold text-40 leading-10 md:text-50 md:leading-44">Estrela do público</h3>
                        <p className="text-black font-normal text-16 leading-5 md:text-18 lg:text-20">O prêmio Conceição Rangel Fiúza de Melo celebra a escolha do público através de uma votação direta, destacando a solução que conquistou o coração de centenas de pessoas.
                            <PublicPrizeOverlay />
                        </p>
                    </div>
                    <div className="w-full h-16 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain lg:absolute lg:bottom-0 lg:w-[300vw] lg:-translate-x-[100vw]" />
                </div>
                <div className="py-20 relative px-8 flex justify-center items-center md:w-[80vw] md:mx-auto md:py-10 md:pt-32 lg:py-0 lg:pt-20 lg:flex-1 xl:pt-32">
                    <Image src={WavePublicPrize} alt="Sasdas" className="absolute top-0 h-[calc(100%+100px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-left lg:hidden" />
                    <Image src={WavePublicPrizeDesktop} alt="Sasdas" className="absolute hidden top-0 h-[calc(100%+200px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-[left_top] lg:block" />
                    <div className="flex flex-col items-center justify-center gap-6 z-10 relative w-full md:gap-20 lg:gap-8">
                        <div className="flex flex-col items-center justify-center gap-8 w-full md:flex-row-reverse md:justify-start md:gap-0 xl:gap-10">
                            <div className="flex flex-col items-center justify-center gap-6 w-full md:w-fit">
                                <span className="text-white text-36 font-semibold leading-40 text-right self-end z-10">Escolha um ano:</span>
                                <div className="flex self-end gap-6">
                                    <Checkbox checked={selectedYear === 2023} onClick={() => onCheckboxClick(2023)}>
                                        2023
                                    </Checkbox>
                                    <Checkbox checked={selectedYear === 2022} onClick={() => onCheckboxClick(2022)}>
                                        2022
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="self-end lg:self-center lg:flex-1 lg:pl-10 pb-10 md:pb-0">
                                <Select variant="light" onValueChange={(value) => setSelectedCourse(value as CourseEnum)} defaultValue={CourseEnum.ECOMP} placeholder="Selecione um curso">
                                    <SelectItem value={CourseEnum.ECOMP}>
                                        Engenharia da Computação
                                    </SelectItem>
                                    <SelectItem value={CourseEnum.BCC}>
                                        Ciência da Computação
                                    </SelectItem>
                                </Select>
                            </div>
                        </div>
                        <WinnerCard {...getWinnerProject()} />
                    </div>
                </div>
            </div>
        </section>
    )
}