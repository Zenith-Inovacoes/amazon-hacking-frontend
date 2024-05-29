import Button from '@/components/atoms/Button'
import GoalCard from './components/GoalCard'
import NumberCard from './components/NumberCard'
import { MotionDiv, MotionH3, MotionP } from '@/components/Motion'
import { useTranslations } from 'next-intl'
import NumbersSection from './components/NumbersSection'

// Images
import Image from 'next/image'
import AboutGoalMain from 'public/images/About-Goal-Image.svg'
import AboutMainImage from 'public/images/About-Main.svg'
import AboutGoal1 from 'public/images/About-Goal-1.svg'
import AboutGoal2 from 'public/images/About-Goal-2.svg'
import AboutGoal3 from 'public/images/About-Goal-3.png'
import AboutGoal4 from 'public/images/About-Goal-4.png'
import AboutNumber1 from 'public/images/About-Number-1.svg'
import AboutNumber2 from 'public/images/About-Number-2.png'
import AboutNumber3 from 'public/images/About-Number-3.png'
import AboutNumberImage from 'public/images/About-Numbers-Image.svg'
import AboutNumberPlant from 'public/images/About-Number-Plant.png'
import { sections } from '@/constants/sections'

const FirstWave = () => {
    return (
        <svg
            id='about-first-wave'
            className='rotate-0 duration-300 -mt-28 sm:-mt-36 md:-mt-48 lg:-mt-60 xl:-mt-80 2xl:-mt-[420px] 3xl:-mt-[25%] 4xl:-mt-[22%]'
            viewBox='0 0 1440 280'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    id='about-first-wave-gradient'
                    x1='0'
                    x2='0'
                    y1='1'
                    y2='0'
                >
                    <stop stopColor='rgba(255, 255, 255, 1)' offset='0%'></stop>
                    <stop
                        stopColor='rgba(255, 255, 255, 1)'
                        offset='100%'
                    ></stop>
                </linearGradient>
            </defs>
            <path
                className='translate-x-0 translate-y-0 opacity-100'
                fill='url(#about-first-wave-gradient)'
                d='M0,252L80,252C160,252,320,252,480,242.7C640,233,800,215,960,200.7C1120,187,1280,177,1440,186.7C1600,196,1760,224,1920,200.7C2080,177,2240,103,2400,98C2560,93,2720,159,2880,168C3040,177,3200,131,3360,121.3C3520,112,3680,140,3840,163.3C4000,187,4160,205,4320,182C4480,159,4640,93,4800,56C4960,19,5120,9,5280,37.3C5440,65,5600,131,5760,140C5920,149,6080,103,6240,112C6400,121,6560,187,6720,210C6880,233,7040,215,7200,214.7C7360,215,7520,233,7680,214.7C7840,196,8000,140,8160,98C8320,56,8480,28,8640,51.3C8800,75,8960,149,9120,177.3C9280,205,9440,187,9600,168C9760,149,9920,131,10080,140C10240,149,10400,187,10560,205.3C10720,224,10880,224,11040,196C11200,168,11360,112,11440,84L11520,56L11520,280L11440,280C11360,280,11200,280,11040,280C10880,280,10720,280,10560,280C10400,280,10240,280,10080,280C9920,280,9760,280,9600,280C9440,280,9280,280,9120,280C8960,280,8800,280,8640,280C8480,280,8320,280,8160,280C8000,280,7840,280,7680,280C7520,280,7360,280,7200,280C7040,280,6880,280,6720,280C6560,280,6400,280,6240,280C6080,280,5920,280,5760,280C5600,280,5440,280,5280,280C5120,280,4960,280,4800,280C4640,280,4480,280,4320,280C4160,280,4000,280,3840,280C3680,280,3520,280,3360,280C3200,280,3040,280,2880,280C2720,280,2560,280,2400,280C2240,280,2080,280,1920,280C1760,280,1600,280,1440,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z'
            ></path>
        </svg>
    )
}

const MiddleWave = () => {
    return (
        <div className='bg-white -mt-20 md:-mt-28 lg:mt-0 w-full'>
            <svg
                id='about-middle-wave'
                className='rotate-0 duration-300'
                viewBox='0 0 1440 260'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    <linearGradient
                        id='about-middle-wave-gradient'
                        x1='0'
                        x2='0'
                        y1='1'
                        y2='0'
                    >
                        <stop
                            stopColor='rgba(1, 101, 183, 1)'
                            offset='0%'
                        ></stop>
                        <stop
                            stopColor='rgba(1, 101, 183, 1)'
                            offset='100%'
                        ></stop>
                    </linearGradient>
                </defs>
                <path
                    className='translate-x-0 translate-y-0 opacity-100'
                    fill='url(#about-middle-wave-gradient)'
                    d='M0,156L120,160.3C240,165,480,173,720,147.3C960,121,1200,61,1440,65C1680,69,1920,139,2160,138.7C2400,139,2640,69,2880,47.7C3120,26,3360,52,3600,56.3C3840,61,4080,43,4320,39C4560,35,4800,43,5040,52C5280,61,5520,69,5760,60.7C6000,52,6240,26,6480,26C6720,26,6960,52,7200,52C7440,52,7680,26,7920,21.7C8160,17,8400,35,8640,39C8880,43,9120,35,9360,30.3C9600,26,9840,26,10080,47.7C10320,69,10560,113,10800,117C11040,121,11280,87,11520,78C11760,69,12000,87,12240,86.7C12480,87,12720,69,12960,52C13200,35,13440,17,13680,17.3C13920,17,14160,35,14400,73.7C14640,113,14880,173,15120,182C15360,191,15600,147,15840,138.7C16080,130,16320,156,16560,151.7C16800,147,17040,113,17160,95.3L17280,78L17280,260L17160,260C17040,260,16800,260,16560,260C16320,260,16080,260,15840,260C15600,260,15360,260,15120,260C14880,260,14640,260,14400,260C14160,260,13920,260,13680,260C13440,260,13200,260,12960,260C12720,260,12480,260,12240,260C12000,260,11760,260,11520,260C11280,260,11040,260,10800,260C10560,260,10320,260,10080,260C9840,260,9600,260,9360,260C9120,260,8880,260,8640,260C8400,260,8160,260,7920,260C7680,260,7440,260,7200,260C6960,260,6720,260,6480,260C6240,260,6000,260,5760,260C5520,260,5280,260,5040,260C4800,260,4560,260,4320,260C4080,260,3840,260,3600,260C3360,260,3120,260,2880,260C2640,260,2400,260,2160,260C1920,260,1680,260,1440,260C1200,260,960,260,720,260C480,260,240,260,120,260L0,260Z'
                ></path>
            </svg>
        </div>
    )
}

export default function About() {
    const t = useTranslations('Home.About')
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
        <>
            <FirstWave />
            {/* About */}
            <div
                id={sections.about}
                className='h-fit relative bg-white pt-24 before:w-full before:h-1 before:bg-white before:top-[-2px] before:left-0 before:absolute lg:pb-32 2xl:pt-0'
            >
                <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[35%] lg:bottom-[0%]" />
                <div className='flex flex-col gap-9 justify-between items-center max-w-screen-2xl mx-auto lg:flex-row'>
                    <MotionDiv
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        initial='hidden'
                        whileInView='show'
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.5,
                                    duration: 0.5,
                                    ease: 'easeIn',
                                },
                            },
                        }}
                        className='flex gap-7 items-center justify-center flex-col px-8 lg:flex-1 lg:items-start'
                    >
                        <MotionH3
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '-20px',
                                },
                                show: {
                                    opacity: 1,
                                    x: '0px',
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            className='text-40 font-bold text-black leading-44 text-center md:text-50 md:leading-62 lg:text-60 lg:text-left'
                        >
                            {t('title')}
                        </MotionH3>
                        <MotionP
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '-20px',
                                },
                                show: {
                                    opacity: 1,
                                    x: '0px',
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            className='font-normal text-16 leading-5 text-black text-center md:text-18 lg:text-20 lg:leading-6 lg:text-left'
                        >
                            {t('description')}
                        </MotionP>
                        <MotionDiv
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '-20px',
                                },
                                show: {
                                    opacity: 1,
                                    x: '0px',
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                        >
                            <Button asChild>
                                <a href='#about-numbers'>{t('buttonText')}</a>
                            </Button>
                        </MotionDiv>
                    </MotionDiv>
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='w-full h-96 relative lg:w-[50%] lg:h-[400px]'
                    >
                        <Image
                            src={AboutMainImage}
                            alt='Imagem com 3 pessoas estudando'
                            fill
                        />
                    </MotionDiv>
                </div>
            </div>
            <MiddleWave />
            {/* Goals */}
            <NumbersSection>
                <div className='bg-black absolute h-[15%] w-full bottom-0' />
                <div className='flex gap-24 px-8 justify-center items-center max-w-screen-2xl mx-auto'>
                    <MotionDiv
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        initial='hidden'
                        whileInView='show'
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.5,
                                    duration: 0.5,
                                    ease: 'easeIn',
                                },
                            },
                        }}
                        className='flex flex-col gap-7 items-center justify-center flex-1'
                    >
                        <MotionH3
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '-20px',
                                },
                                show: {
                                    opacity: 1,
                                    x: '0px',
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            className='text-40 font-bold text-white leading-44 w-full text-center md:text-50 md:text-left md:leading-62 lg:text-60'
                        >
                            {t('goalsTitle')}
                        </MotionH3>
                        <MotionP
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '-20px',
                                },
                                show: {
                                    opacity: 1,
                                    x: '0px',
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            className='font-normal text-16 leading-5 text-white text-center md:text-left md:text-18 lg:text-20 lg:leading-6'
                        >
                            {t('goalsDescription')}
                        </MotionP>
                    </MotionDiv>
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='hidden md:block relative w-[40%] h-52 lg:h-80'
                    >
                        <Image
                            src={AboutGoalMain}
                            alt='Rapaz mexendo no seu notebook e pensando'
                            fill
                        />
                    </MotionDiv>
                </div>
                <div className='relative z-10 max-w-[100vw] w-full mx-auto'>
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[60%]" />
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[20%]" />
                    <MotionDiv
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        initial='hidden'
                        whileInView='show'
                        variants={goalCardVariants}
                        className='horizontal-snap cursor-grab lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 relative z-10 lg:grid lg:px-8 max-w-screen-2xl lg:mx-auto lg:place-items-center'
                    >
                        <GoalCard
                            variants={goalCardVariants}
                            title={t('GoalCards.imersion.title')}
                            image={AboutGoal1}
                            altImage='Duas pessoas numa aventura'
                        >
                            {t.rich('GoalCards.imersion.description', {
                                colored: (chunks) => (
                                    <b className='text-primary-100'>{chunks}</b>
                                ),
                            })}
                        </GoalCard>
                        <GoalCard
                            variants={goalCardVariants}
                            title={t('GoalCards.iteration.title')}
                            image={AboutGoal2}
                            altImage='Um homem e uma mulher apertando as mãos'
                        >
                            {t.rich('GoalCards.iteration.description', {
                                colored: (chunks) => (
                                    <b className='text-primary-100'>{chunks}</b>
                                ),
                            })}
                        </GoalCard>
                        <GoalCard
                            variants={goalCardVariants}
                            title={t('GoalCards.innovation.title')}
                            image={AboutGoal3}
                            altImage='Um homem mexendo no celular'
                        >
                            {t.rich('GoalCards.innovation.description', {
                                colored: (chunks) => (
                                    <b className='text-primary-100'>{chunks}</b>
                                ),
                            })}
                        </GoalCard>
                        <GoalCard
                            variants={goalCardVariants}
                            title={t('GoalCards.network.title')}
                            image={AboutGoal4}
                            altImage='Três pessoas conectadas'
                        >
                            {t.rich('GoalCards.network.description', {
                                colored: (chunks) => (
                                    <b className='text-primary-100'>{chunks}</b>
                                ),
                            })}
                        </GoalCard>
                    </MotionDiv>
                </div>
                <div className='bg-black md:bg-transparent relative'>
                    <div className='flex gap-16 max-w-screen-2xl w-full mx-auto px-8'>
                        <div className='flex flex-1 pt-20 pb-20 flex-col gap-3 relative z-10 grid-cols-2 grid-rows-[1fr_1fr] md:grid lg:grid-cols-[1fr_auto] xl:grid-cols-2'>
                            <NumberCard
                                className='md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'
                                title={t('NumberCards.students')}
                                slowStartAnimation={false}
                                interval={10}
                                number={240}
                                image={AboutNumber1}
                                altImage='Ícone de um usuário'
                            />
                            <NumberCard
                                title={t('NumberCards.teams')}
                                number={30}
                                image={AboutNumber2}
                                altImage='Ícone de vários usuários'
                            />
                            <NumberCard
                                title={t('NumberCards.mentors')}
                                number={25}
                                image={AboutNumber3}
                                altImage='Ícone de vários executivos'
                            />
                            <Image
                                src={AboutNumberPlant}
                                alt='Planta'
                                className='hidden lg:block absolute bottom-4 -left-8 z-10'
                                height={248}
                                width={160}
                            />
                        </div>
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className='relative hidden lg:block w-[30%] translate-y-6'
                        >
                            <Image
                                src={AboutNumberImage}
                                alt='Homem sentado mexendo no seu notebook com árvores atrás'
                                fill
                            />
                        </MotionDiv>
                    </div>
                </div>
            </NumbersSection>
        </>
    )
}
