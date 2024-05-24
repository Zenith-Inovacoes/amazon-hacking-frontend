'use client'

import { Checkbox, Overlay, Select, Button } from '@/components/atoms'
import { SelectItem } from '@/components/atoms/Select'
import WinnerCard from './components/WinnerCard'
import { publicWinners } from '@/model/Winners'
import { useState } from 'react'
import { CourseEnum } from '@/types/IProject'
import WavePublicPrize from 'public/images/Wave-Public-Prize.svg'
import WavePublicPrizeDesktop from 'public/images/Public-Prize-Wave-Dk.svg'
import Image from 'next/image'
import PublicPrizeOverlay from './components/PublicPrizeOverlay'

export default function PublicPrize() {
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
    <section className='relative bg-white before:absolute before:bg-white before:w-full before:h-4 before:-translate-y-1'>
      <div className='lg:flex justify-center items-center relative max-w-screen-2xl mx-auto'>
        <div className='flex flex-col gap-5 z-10 flex-1 lg:z-0'>
          <div className='flex flex-col gap-5 px-8'>
            <h3 className='text-black font-bold text-40 leading-10 md:text-50 md:leading-44'>
              Estrela do público
            </h3>
            <p className='text-black font-normal text-16 leading-5 md:text-18 lg:text-20'>
              O prêmio Conceição Rangel Fiúza de Melo celebra a escolha do
              público através de uma votação direta, destacando a solução que
              conquistou o coração de centenas de pessoas.
              <PublicPrizeOverlay />
            </p>
          </div>
          <div className="w-full h-16 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain lg:absolute lg:bottom-0 lg:w-[300vw] lg:-translate-x-[100vw]" />
        </div>
        <div className='py-20 relative px-8 flex justify-center items-center md:w-[100vw] md:mx-auto md:py-10 md:pt-32 lg:py-0 lg:pt-20 lg:flex-1 xl:pt-32'>
          <Image
            src={WavePublicPrize}
            alt='Sasdas'
            className='absolute top-0 h-[calc(100%+200px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-left lg:hidden'
          />
          <Image
            src={WavePublicPrizeDesktop}
            alt='Sasdas'
            className='absolute hidden top-0 h-[calc(100%+200px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-[left_top] lg:block'
          />
          <div className='flex flex-col items-center justify-center gap-6 z-10 relative w-full md:gap-20 lg:gap-8'>
            <div className='flex flex-col items-center justify-center gap-8 w-full md:flex-row-reverse md:justify-start md:gap-0 xl:gap-10 px-8 lg:px-0'>
              <div className='flex flex-col items-center justify-center gap-6 w-full md:w-fit'>
                <span className='text-white text-36 font-semibold leading-40 text-right self-end z-10'>
                  Escolha um ano:
                </span>
                <div className='flex self-end gap-6'>
                  <Checkbox
                    checked={selectedYear === 2023}
                    onClick={() => onCheckboxClick(2023)}
                  >
                    2023
                  </Checkbox>
                  <Checkbox
                    checked={selectedYear === 2022}
                    onClick={() => onCheckboxClick(2022)}
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
