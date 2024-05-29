import Image from 'next/image'
import NotFoundImage from 'public/404Image.svg'
import Button from '@/components/atoms/Button'
import { MotionDiv } from '@/components/Motion'
import { ODDsData } from '@/model/ODSsData'

import ODSBox from './components'

export default function ODSs() {
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
        <section className='flex bg-white min-h-screen w-full flex-col items-center justify-center py-4'>
            <div className='max-w-screen-2xl'>
                <div className='flex flex-col gap-y-6 w-full justify-center items-center'>
                    <h2 className='text-40 font-bold text-black text-center'>Explore soluções inovadoras</h2>
                    <p className='text-16 text-neutral-500 text-center'>Durante a jornada, equipes multidisciplinares da 3ª Edição do Amazon Hacking desenvolveram projetos que abordam problemas reais e oferecem soluções práticas com impacto positivo.

                    </p>
                </div>
                <div className='flex flex-col gap-y-7 w-full'>
                    <p className='text-20 font-bold'>Objetivos de Desenvolvimento Sustentável</p>
                    <div className='relative z-10 mx-auto'>
                        <MotionDiv
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            initial='hidden'
                            whileInView='show'
                            variants={goalCardVariants}
                            className='horizontal-snap cursor-grab overflow-hidden lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 relative z-10 lg:grid lg:px-8 max-w-screen-2xl lg:mx-auto lg:place-items-center'
                        >
                            {ODDsData.map(({ image, url, odsName }, index) => (
                                <ODSBox
                                    key={index}
                                    image={image}
                                    url={url}
                                    odsName={odsName}
                                />
                            ))}
                        </MotionDiv>
                    </div>
                </div>
            </div>
            <div className='bg-repeat bg-404Decorator w-full h-[87px]' />
        </section>
    )
}
