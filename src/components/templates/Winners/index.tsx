'use client'

import { Checkbox, Select } from '@/components/atoms'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/services/utils/className.utils'
import WinnerCard from './WinnerCard'

import WinnersWave from 'public/Waves/WinnerWaves/Mobile/WinnersWave.svg'
import WinnersWaveContent from 'public/Waves/WinnerWaves/Mobile/WinnersWaveContent.svg'

import WinnersWaveTablet from 'public/Waves/WinnerWaves/Tablet/WinnersWave.svg'

import WinnersWaveDesktop from 'public/Waves/WinnerWaves/Desktop/WinnerWave.svg'
import { SelectItem } from '@/components/atoms/Select'
import { sections } from '@/constants/sections'

const Winners = ({
    title,
    description,
    year,
    eng,
    sci,
}: {
    title: string
    description: string
    year: string
    eng: string
    sci: string
}) => {
    const [toggle, setToggle] = useState<boolean[]>([false, false, false])
    const [course, setCourse] = useState<'eng' | 'sci'>('eng')

    const handleToggle = (index: number) => {
        setToggle((currState) =>
            currState.map((state, idx) => (idx === index ? !state : false))
        )
    }

    const cardsContent = {
        engineering: [
            ['Ymã', 'Tupã', 'Zenith Inova'],
            ['Ludus', 'TucuExtract', 'CVGreen'],
            ['Yubi', 'Inventory', 'Hélix'],
        ],
        science: [
            ['Ymã', 'Parajás', 'BioTank'],
            ['Ludus', 'Cotico', 'SICFAA'],
            ['Yubi', 'Curumin', 'AutoDrops'],
        ],
    }

    return (
        <section
            id={sections.winners}
            className='relative z-20 bg-white flex flex-col items-center justify-center w-full h-full overflow-hidden pt-16 pb-32 lg:pb-52'
        >
            <div className='flex flex-col max-w-screen-2xl w-full items-center justify-center gap-[84px] md:gap-[226px] lg:flex-row lg:justify-between lg:gap-0'>
                <div className='flex flex-col w-full items-center justify-center gap-[22px] px-8 md:px-[62px] md:gap-7 md:items-start lg:px-0 lg:pl-[100px] text-black'>
                    <h1 className='text-black text-center font-bold text-40 leading-[1.1] md:text-start md:text-50'>
                        {title}
                    </h1>
                    <p className='text-black text-center text-base tracking-[0.192px] md:text-start md:mb-[22px] md:text-18 md:tracking-[0.216px]'>
                        {description}
                    </p>
                    <h2 className='text-black font-semibold text-36 text-center tracking-[0.432px] md:text-start'>
                        {year}
                    </h2>
                    <div className='flex flex-col items-center justify-center w-full gap-[22px] md:justify-between md:flex-row md:w-[95%]'>
                        <div className='flex gap-[22px] items-center justify-center z-50'>
                            {toggle.map((value, idx) => (
                                <Checkbox
                                    key={idx}
                                    onChange={() => handleToggle(idx)}
                                    checked={value}
                                >
                                    {`202${toggle.length - idx + 1}`}
                                </Checkbox>
                            ))}
                        </div>
                        <div
                            className={cn(
                                'flex transition-all duration-300 z-40 ',
                                !toggle[1] &&
                                    !toggle[2] &&
                                    'opacity-0 pointer-events-none -mt-20'
                            )}
                        >
                            <Select
                                placeholder=''
                                defaultValue='eng'
                                onValueChange={(e: 'eng' | 'sci') => setCourse(e)}
                            >
                                <SelectItem value='eng'>{eng}</SelectItem>
                                <SelectItem value='sci'>{sci}</SelectItem>
                            </Select>
                        </div>
                    </div>
                </div>
                <div
                    className={cn(
                        'hidden absolute items-center justify-start w-full z-50',
                        (toggle[0] || toggle[1] || toggle[2]) && 'flex'
                    )}
                ></div>
                <div className='absolute bg-repeat bg-symbol w-full h-full max-h-[87px] opacity-60 inset-0 top-1/2 xs:translate-y-20 translate-y-40 md:-translate-y-[min(15.65vw,160px)] lg:top-full lg:-translate-y-52' />
                <div className='relative flex flex-col w-full h-full items-start justify-center lg:items-end'>
                    <div
                        className={cn(
                            'absolute z-20 opacity-0 transition-opacity duration-500 horizontal-snap w-full flex gap-12 px-[35vw] justify-start items-center lg:overflow-hidden lg:flex-wrap-reverse lg:px-0 lg:justify-center pb-32 lg:pt-10 lg:-mr-[8%] lg:right-0 lg:w-[120%] xl:w-[110%]',
                            course === 'eng' &&
                                (toggle[0] || toggle[1] || toggle[2]) &&
                                'opacity-100 z-30',
                            (course !== 'eng' || (!toggle[0] && !toggle[1] && !toggle[2])) &&
                                'pointer-events-none'
                        )}
                    >
                        {cardsContent.engineering.map((val, idx) => (
                            <WinnerCard
                                key={idx}
                                idx={idx}
                                currentYear={[toggle[0], toggle[1], toggle[2]]}
                                course={course}
                                className={cn(idx === 0 && 'lg:order-3')}
                            >
                                {val}
                            </WinnerCard>
                        ))}
                    </div>
                    <div
                        className={cn(
                            'absolute z-20 opacity-0 transition-opacity duration-500 horizontal-snap w-full flex gap-12 px-[35vw] justify-start items-center lg:overflow-hidden lg:flex-wrap-reverse lg:px-0 lg:justify-center pb-32 lg:-mr-[8%] lg:pt-10 lg:right-0 lg:w-[120%] xl:w-[110%]',
                            course === 'sci' &&
                                (toggle[0] || toggle[1] || toggle[2]) &&
                                'opacity-100 z-30',
                            (course !== 'sci' || (!toggle[0] && !toggle[1] && !toggle[2])) &&
                                'pointer-events-none'
                        )}
                    >
                        {cardsContent.science.map((val, idx) => (
                            <WinnerCard
                                key={idx}
                                idx={idx}
                                currentYear={[toggle[0], toggle[1], toggle[2]]}
                                course={course}
                                className={cn(idx === 0 && 'lg:order-3')}
                            >
                                {val}
                            </WinnerCard>
                        ))}
                    </div>
                    <Image
                        src={WinnersWave}
                        alt='Winners Wave'
                        className={cn(
                            'w-full max-w-[500px] z-10 md:hidden transition-transform duration-500',
                            (toggle[0] || toggle[1] || toggle[2]) && 'scale-y-75'
                        )}
                    />
                    <Image
                        src={WinnersWaveContent}
                        alt='Winners Wave Content'
                        fill
                        className={cn(
                            'absolute px-8 max-w-[500px] z-10 md:translate-x-[min(20.33vw,208px)] md:translate-y-[min(2.73vw,28px)] md:max-w-[462px] md:max-h-[462px] md:px-0 lg:hidden transition-opacity duration-300',
                            (toggle[0] || toggle[1] || toggle[2]) && 'opacity-0'
                        )}
                    />

                    <Image
                        src={WinnersWaveTablet}
                        alt='Winners Wave Shadow'
                        className='absolute hidden md:block -translate-y-4 translate-x-2 opacity-30 blur-[2px] lg:hidden'
                    />
                    <Image
                        src={WinnersWaveTablet}
                        alt='Winners Wave'
                        className='hidden md:block lg:hidden'
                    />

                    <div className='hidden relative lg:flex items-center justify-center -mr-52 min-w-[min(68.35vw,1050px)]'>
                        <Image
                            src={WinnersWaveDesktop}
                            alt='Wave Shadow'
                            className='absolute opacity-30 blur-[2px] -translate-y-4 translate-x-2'
                        />
                        <Image
                            src={WinnersWaveDesktop}
                            alt='Wave'
                        />
                        <Image
                            src={WinnersWaveContent}
                            alt='Winners Wave Content'
                            className={cn(
                                'absolute z-10 max-w-[462px] max-h-[462px] w-full h-full transition-opacity duration-300',
                                (toggle[0] || toggle[1] || toggle[2]) && 'opacity-0'
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Winners
