'use client'

import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import editionsFlatArt from 'public/EditionsFlatArt.svg'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import EditionOverlay from './components/EditionOverlay'

import island2022 from 'public/FlatArt2022.svg'
import island2023 from 'public/FlatArt2023.svg'

import waveMobile from 'public/waveMobileEditions.svg'
import waveTablet from 'public/WaveTabletEditions.svg'
import waveDesktop from 'public/WaveDesktopEditions.svg'

import restrospect from 'public/challengerFlatArt.svg'
import { sections } from '@/constants/sections'

const FirstWave = () => {
  return (
    <div className='relative after:w-full after:h-2 after:bg-white after:absolute after:-bottom-1'>
      <svg
        id='editions-first-wave'
        className='rotate-0 duration-300'
        viewBox='0 0 1440 280'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='editions-first-wave-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stopColor='rgba(255, 255, 255, 1)' offset='0%'></stop>
            <stop stopColor='rgba(255, 255, 255, 1)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#editions-first-wave-gradient)'
          d='M0,252L80,252C160,252,320,252,480,242.7C640,233,800,215,960,200.7C1120,187,1280,177,1440,186.7C1600,196,1760,224,1920,200.7C2080,177,2240,103,2400,98C2560,93,2720,159,2880,168C3040,177,3200,131,3360,121.3C3520,112,3680,140,3840,163.3C4000,187,4160,205,4320,182C4480,159,4640,93,4800,56C4960,19,5120,9,5280,37.3C5440,65,5600,131,5760,140C5920,149,6080,103,6240,112C6400,121,6560,187,6720,210C6880,233,7040,215,7200,214.7C7360,215,7520,233,7680,214.7C7840,196,8000,140,8160,98C8320,56,8480,28,8640,51.3C8800,75,8960,149,9120,177.3C9280,205,9440,187,9600,168C9760,149,9920,131,10080,140C10240,149,10400,187,10560,205.3C10720,224,10880,224,11040,196C11200,168,11360,112,11440,84L11520,56L11520,280L11440,280C11360,280,11200,280,11040,280C10880,280,10720,280,10560,280C10400,280,10240,280,10080,280C9920,280,9760,280,9600,280C9440,280,9280,280,9120,280C8960,280,8800,280,8640,280C8480,280,8320,280,8160,280C8000,280,7840,280,7680,280C7520,280,7360,280,7200,280C7040,280,6880,280,6720,280C6560,280,6400,280,6240,280C6080,280,5920,280,5760,280C5600,280,5440,280,5280,280C5120,280,4960,280,4800,280C4640,280,4480,280,4320,280C4160,280,4000,280,3840,280C3680,280,3520,280,3360,280C3200,280,3040,280,2880,280C2720,280,2560,280,2400,280C2240,280,2080,280,1920,280C1760,280,1600,280,1440,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z'
        ></path>
      </svg>
    </div>
  )
}

export default function Editions() {
  const breakpoint = useBreakpoint()
  // const t = useTranslations("Home.Editions");

  let waveImageSrc = waveMobile

  if (breakpoint === 'md') {
    waveImageSrc = waveTablet
  } else if (breakpoint === 'lg' || breakpoint === 'xl') {
    waveImageSrc = waveDesktop
  }

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
    <section>
      <FirstWave />
      <section
        id={sections.editions}
        className='bg-white relative z-[26] mx-auto flex flex-col gap-9 md:gap-20 h-full items-center justify-center'
      >
        <div className='w-full flex flex-col items-center justify-center px-5 mb-5 md:mb-0 md:flex-row lg:justify-around max-w-screen-2xl'>
          <motion.div
            viewport={{
              once: true,
              amount: 0.5,
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
            className='relative w-[279px] h-[247px] md:w-[310px] md:h-[310px] lg:w-[427px] lg:h-[427px]'
          >
            <Image src={editionsFlatArt} alt='Flat Art de uma ilha' fill />
          </motion.div>
          <motion.div
            viewport={{
              once: true,
              amount: 0.5,
            }}
            initial='hidden'
            whileInView='show'
            variants={{
              hidden: {
                opacity: 0,
                y: '-50px',
              },
              show: {
                opacity: 1,
                y: '0px',
                transition: {
                  staggerChildren: 0.5,
                  duration: 1,
                  ease: 'easeIn',
                },
              },
            }}
            className='flex flex-col w-full md:w-1/2 gap-y-5'
          >
            <h2 className='text-black text-40 font-bold lg:text-60'>
              3° Edição
              {/* {t("label")} */}
            </h2>
            <p className='text-neutral-600 text-24 mb-7 font-semibold leading-7 lg:text-28'>
              Saberes do Combú: Desenvolvendo uma bioeconomia inclusiva na
              Amazônia.
              {/* {t("subtitle")} */}
            </p>
            <div className='flex flex-col gap-y-7'>
              <p className='text-neutral-500 font-medium text-16 leading-4 lg:text-20 lg:leading-6'>
                A Ilha do Combu é uma ilha fluvial situada no Rio Guamá, bem
                próxima de Belém do Pará. Sendo lar para aproximadamente 2.200
                habitantes. sua economia é impulsionada principalmente pelo
                extrativismo de produtos como açaí, cacau e cupuaçu.
                {/* {t("mainText1")} */}
              </p>
              <p className='text-neutral-500 font-medium text-16 leading-4 lg:text-20 lg:leading-6'>
                A ilha foi designada como Área de Proteção Ambiental para
                preservar sua rica biodiversidade e enfrenta desafios de
                crescimento turístico e infraestrutura, especialmente em
                saneamento e gestão de resíduos. Estes problemas exigem soluções
                cuidadosas para manter um equilíbrio entre desenvolvimento
                econômico e sustentabilidade ambiental.
                {/* {t("mainText2")} */}
              </p>
            </div>
          </motion.div>
        </div>
        <div />
        <div className='relative w-screen'>
          <div className='absolute bg-cover bg-editionsMobileWave md:bg-editionsTabletWave md:justify-center md:items-center md:flex md:flex-row w-full pb-8'>
            <div className='flex w-full max-w-screen-2xl items-center justify-center pt-7'>
              <motion.div
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                initial='hidden'
                whileInView='show'
                variants={{
                  hidden: {
                    opacity: 0,
                    x: '-50px',
                  },
                  show: {
                    opacity: 1,
                    x: '0px',
                    transition: {
                      staggerChildren: 0.5,
                      duration: 0.5,
                      ease: 'easeIn',
                    },
                  },
                }}
                className='w-full my-12 flex flex-col gap-y-7 justify-center items-center px-5 md:my-20 md:w-1/2 md:items-start md:translate-y-10 lg:mb-24 lg:mt-56'
              >
                <h4 className='text-40 font-semibold md:text-50 md:text-left text-white'>
                  Retrospectiva
                  {/* {t("retrospective")} */}
                </h4>
                <p className='text-16 text-center md:text-18 md:text-left md:leading-6 lg:text-20 text-white'>
                  Cada edição do Amazon Hacking contribuiu para o crescimento
                  contínuo do programa e o impacto positivo na biodiversidade da
                  Amazônia e suas comunidades. Descubra as realizações e
                  desafios que marcaram nosso legado.
                  {/* {t("retrospectiveText")} */}
                </p>
              </motion.div>
              <motion.div
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                initial='hidden'
                whileInView='show'
                variants={{
                  hidden: {
                    opacity: 0,
                    x: '-50px',
                  },
                  show: {
                    opacity: 1,
                    x: '0px',
                    transition: {
                      staggerChildren: 0.5,
                      duration: 0.5,
                      ease: 'easeIn',
                    },
                  },
                }}
                className='hidden relative w-[221px] h-[271px] lg:w-[360px] lg:h-[360px] md:block md:translate-y-10'
              >
                <Image src={restrospect} alt='flat art' fill />
              </motion.div>
            </div>
          </div>
          <div className='flex flex-col w-full h-96' />
          <div className='relative z-10 max-w-[100vw] w-full mx-auto -translate-y-40 md:-translate-y-12 lg:translate-y-12'>
            <div className="w-full h-24 opacity-50 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[60%]" />
            <div className="w-full h-24 opacity-50 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[40%]" />
            <div className="w-full h-24 opacity-50 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[20%]" />
            <motion.div
              viewport={{
                once: true,
                amount: 0.5,
              }}
              initial='hidden'
              whileInView='show'
              variants={goalCardVariants}
              className='horizontal-snap cursor-grab lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 md:justify-center md:pl-0 relative z-10 md:overflow-hidden max-w-screen-2xl lg:mx-auto lg:place-items-center'
            >
              <div className='relative  bg-white rounded-[35px] shadow-2xl p-8'>
                <div className='relative w-[252px] h-[158px]'>
                  <Image src={island2023} alt='Flat art de uma ilha' fill />
                </div>
                <div className='flex flex-col gap-y-3 items-center'>
                  <p className='text-18 text-black'>2º Edição</p>
                  <p className='text-36 font-bold text-black'>2023</p>
                  <p className='text-18 text-neutral-500'>Ilha de Cotijuba</p>
                  <EditionOverlay edition='2023' image={island2023} />
                </div>
              </div>

              <div className='relative  bg-white rounded-[35px] shadow-2xl p-8'>
                <div className='relative w-[252px] h-[158px]'>
                  <Image src={island2022} alt='Flat art de uma ilha' fill />
                </div>
                <div className='flex flex-col gap-y-3 items-center'>
                  <p className='text-18 text-black'>1º Edição</p>
                  <p className='text-36 font-bold text-black'>2022</p>
                  <p className='text-18 text-neutral-500'>Ilha das Onças</p>
                  <EditionOverlay edition='2022' image={island2022} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  )
}
