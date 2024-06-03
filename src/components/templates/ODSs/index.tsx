'use client'

import { MotionDiv } from '@/components/Motion'
import { ODSsData } from '@/model/ODSsData'
import { motion } from 'framer-motion'
import { ODSsProps } from './types'

import ODSBox from './components'

export default function ODSs({label, ODS, subtitle}: ODSsProps) {
    const goalCardVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.4,
                duration: 0.5,
                ease: 'easeIn',
            },
        },
    }

    return (
        <section className='relative flex bg-white min-h-screen w-full flex-col items-center justify-center py-4'>
            <div className='w-full '>
                <MotionDiv
                viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  initial='hidden'
                  whileInView='show'
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        staggerChildren: 0.5,
                        duration: 0.5,
                        ease: 'easeIn',
                      },
                    },
                  }}
                className='flex flex-col gap-y-6 w-full justify-center items-center px-4 xs:px-8 md:mx-auto md:max-w-[870px] max-w-screen-2xl'>
                    <h2 className='text-36 xs:text-40 md:text-50 lg:text-60 font-bold text-black text-center'>{label}</h2>
                    <p className='text-16 md:text-18 lg:text-20 text-black text-center'>{subtitle}</p>
                </MotionDiv>
                <div className="w-[100vw] h-24 opacity-60 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain my-8" />
                <div className='w-full flex justify-center items-center flex-col gap-y-7 mx-auto relative px-4 xs:px-8 max-w-screen-2xl'>
                    <motion.p 
                    viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      initial='hidden'
                      whileInView='show'
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 20
                        },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            staggerChildren: 0.5,
                            duration: 0.5,
                            ease: 'easeIn',
                          },
                        },
                      }}
                    className='text-20 md:text-24 lg:text-28 font-bold text-center text-black'>{ODS}</motion.p>
                    <div className='relative z-10 max-w-[90vw] w-full md:max-w-[840px]'>
                        <MotionDiv
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            initial='hidden'
                            whileInView='show'
                            variants={goalCardVariants}
                            className='relative horizontal-snap cursor-grab flex gap-5 max-w-screen-2xl xs:gap-x-9 py-12 md:flex-wrap md:pl-0 md:justify-center md:items-center z-10 w-full md:cursor-default md:py-0'
                        >
                            {ODSsData.map(({ image, url, odsName }, index) => (
                                <ODSBox
                                    key={index}
                                    image={image}
                                    url={url}
                                    odsName={odsName}
                                    classname="flex-shrink-0"
                                />
                            ))}
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    )
}
