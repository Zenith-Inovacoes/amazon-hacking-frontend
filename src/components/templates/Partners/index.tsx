import Image from 'next/image'
// Master
import LogoVale from 'public/images/logo-vale.png'
// Manteneurs
import LogoCerti from 'public/images/logo-certi.png'
import LogoAccenture from 'public/images/logo-accenture.svg'
import LogoTCS from 'public/images/logo-tcs.svg'
// Partners
import LogoZenith from 'public/images/logo-zenith.svg'
import LogoParatic from 'public/images/logo-paratic.png'
import LogoVoxdata from 'public/images/logo-voxdata.png'
import LogoIdopter from 'public/images/logo-idopter.svg'
import LogoGSA from 'public/images/logo-gsa.png'
import LogoEduTech from 'public/images/logo-edutech.svg'
import LogoJambu from 'public/images/logo-jambu.png'
import LogoEasyGestor from 'public/images/logo-easygestor.svg'
import LogoW3 from 'public/images/logo-w3.svg'
import LogoSol from 'public/images/logo-sol.png'

import Button from '@/components/atoms/Button'
import { emailAddress } from '@/constants/contacts'

import {
  MotionDiv,
  MotionH3,
  MotionP,
  MotionH4,
  MotionSpan,
} from '@/components/Motion'

import { useTranslations } from 'next-intl'
import { sections } from '@/constants/sections'

export default function Partners() {
  const t = useTranslations('Home.Partners')

  return (
    <div
      id={sections.partners}
      className='w-full bg-white relative h-auto z-10 pt-12 lg:pt-20 pb-8 md:pb-3'
    >
      <MotionDiv
        initial='hidden'
        whileInView='show'
        viewport={{
          once: true,
          amount: 0.25,
        }}
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
        className='text-black text-center space-y-6'
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
          className='text-40 font-bold leading-[44px] md:text-60 md:leading-[66px] text-balance'
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
          className='text-16 font-normal leading-4 max-w-[54ch] mx-auto md:text-18 md:leading-5 lg:text-20 lg:leading-6 text-balance'
        >
          {t('subtitle')}
        </MotionP>
      </MotionDiv>
      <div className='mt-8 relative'>
        <svg
          id='wave-shadow'
          className='rotate-0 duration-300 absolute -top-2'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-master-shadow'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(0,0,0,.25)' offset='0%'></stop>
              <stop stopColor='rgba(0,0,0,.25)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-master-shadow)'
            d='M0,200L120,195.8C240,192,480,183,720,150C960,117,1200,58,1440,50C1680,42,1920,83,2160,95.8C2400,108,2640,92,2880,79.2C3120,67,3360,58,3600,66.7C3840,75,4080,100,4320,91.7C4560,83,4800,42,5040,29.2C5280,17,5520,33,5760,45.8C6000,58,6240,67,6480,95.8C6720,125,6960,175,7200,179.2C7440,183,7680,142,7920,116.7C8160,92,8400,83,8640,83.3C8880,83,9120,92,9360,91.7C9600,92,9840,83,10080,83.3C10320,83,10560,92,10800,83.3C11040,75,11280,50,11520,45.8C11760,42,12000,58,12240,75C12480,92,12720,108,12960,125C13200,142,13440,158,13680,158.3C13920,158,14160,142,14400,120.8C14640,100,14880,75,15120,70.8C15360,67,15600,83,15840,75C16080,67,16320,33,16560,25C16800,17,17040,33,17160,41.7L17280,50L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <svg
          id='wave'
          className='rotate-0 duration-300'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-master'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(1, 101, 183, 1)' offset='0%'></stop>
              <stop stopColor='rgba(1, 101, 183, 1)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-master)'
            d='M0,200L120,195.8C240,192,480,183,720,150C960,117,1200,58,1440,50C1680,42,1920,83,2160,95.8C2400,108,2640,92,2880,79.2C3120,67,3360,58,3600,66.7C3840,75,4080,100,4320,91.7C4560,83,4800,42,5040,29.2C5280,17,5520,33,5760,45.8C6000,58,6240,67,6480,95.8C6720,125,6960,175,7200,179.2C7440,183,7680,142,7920,116.7C8160,92,8400,83,8640,83.3C8880,83,9120,92,9360,91.7C9600,92,9840,83,10080,83.3C10320,83,10560,92,10800,83.3C11040,75,11280,50,11520,45.8C11760,42,12000,58,12240,75C12480,92,12720,108,12960,125C13200,142,13440,158,13680,158.3C13920,158,14160,142,14400,120.8C14640,100,14880,75,15120,70.8C15360,67,15600,83,15840,75C16080,67,16320,33,16560,25C16800,17,17040,33,17160,41.7L17280,50L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <MotionDiv
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={{
            hidden: {
              opacity: 1,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeIn',
                staggerChildren: 0.5,
              },
            },
          }}
          className='bg-primary-100 pt-8 md:pt-0 pb-32 md:pb-48 lg:pb-60 2xl:pb-80 flex flex-col gap-12 relative items-center before:w-full before:absolute before:bg-primary-100 before:h-1 before:-top-[2px]'
        >
          <MotionH4
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
            className='text-white font-bold text-28 leading-8 lg:text-60 lg:leading-65'
          >
            {t('masterTitle')}
          </MotionH4>
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
            className='w-[224px] h-[104px] md:w-[300px] md:h-[140px] lg:w-[386px] lg:h-[180px] relative'
          >
            <Image src={LogoVale} alt='Logotipo da empresa Vale' fill />
          </MotionDiv>
        </MotionDiv>
      </div>
      <div className='relative -mt-32 md:-mt-48 lg:-mt-60 2xl:-mt-96'>
        <svg
          id='wave-manteneurs-shadow'
          className='rotate-0 duration-300 absolute -top-2'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-manteneurs-shadow'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(0,0,0,.25)' offset='0%'></stop>
              <stop stopColor='rgba(0,0,0,.25)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-manteneurs-shadow)'
            d='M0,200L120,175C240,150,480,100,720,100C960,100,1200,150,1440,141.7C1680,133,1920,67,2160,70.8C2400,75,2640,150,2880,187.5C3120,225,3360,225,3600,220.8C3840,217,4080,208,4320,200C4560,192,4800,183,5040,183.3C5280,183,5520,192,5760,166.7C6000,142,6240,83,6480,83.3C6720,83,6960,142,7200,145.8C7440,150,7680,100,7920,79.2C8160,58,8400,67,8640,87.5C8880,108,9120,142,9360,158.3C9600,175,9840,175,10080,183.3C10320,192,10560,208,10800,183.3C11040,158,11280,92,11520,75C11760,58,12000,92,12240,108.3C12480,125,12720,125,12960,133.3C13200,142,13440,158,13680,170.8C13920,183,14160,192,14400,162.5C14640,133,14880,67,15120,62.5C15360,58,15600,117,15840,137.5C16080,158,16320,142,16560,150C16800,158,17040,192,17160,208.3L17280,225L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <svg
          id='wave-manteneurs'
          className='rotate-0 duration-300'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-manteneurs'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(0, 81, 148, 1)' offset='0%'></stop>
              <stop stopColor='rgba(0, 81, 148, 1)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-manteneurs)'
            d='M0,200L120,175C240,150,480,100,720,100C960,100,1200,150,1440,141.7C1680,133,1920,67,2160,70.8C2400,75,2640,150,2880,187.5C3120,225,3360,225,3600,220.8C3840,217,4080,208,4320,200C4560,192,4800,183,5040,183.3C5280,183,5520,192,5760,166.7C6000,142,6240,83,6480,83.3C6720,83,6960,142,7200,145.8C7440,150,7680,100,7920,79.2C8160,58,8400,67,8640,87.5C8880,108,9120,142,9360,158.3C9600,175,9840,175,10080,183.3C10320,192,10560,208,10800,183.3C11040,158,11280,92,11520,75C11760,58,12000,92,12240,108.3C12480,125,12720,125,12960,133.3C13200,142,13440,158,13680,170.8C13920,183,14160,192,14400,162.5C14640,133,14880,67,15120,62.5C15360,58,15600,117,15840,137.5C16080,158,16320,142,16560,150C16800,158,17040,192,17160,208.3L17280,225L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <MotionDiv
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {
              opacity: 1,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeIn',
                staggerChildren: 0.5,
              },
            },
          }}
          className='bg-primary-200 pb-32 md:pb-48 lg:pb-60 2xl:pb-80 flex flex-col gap-12 relative items-center before:w-full before:absolute before:bg-primary-200 before:h-1 before:-top-[2px]'
        >
          <MotionH4
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
            className='text-white font-bold text-28 leading-8 lg:text-60 lg:leading-65'
          >
            {t('manteneursTitle')}
          </MotionH4>
          <MotionDiv className='flex flex-col items-center gap-14'>
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
              className='w-[134px] h-[64px] md:w-[166px] md:h-[80px] lg:w-[224px] lg:h-[108px] relative'
            >
              <Image src={LogoCerti} alt='Logotipo da empresa Certi' fill />
            </MotionDiv>
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
              className='w-[136px] h-[32px] md:w-[170px] md:h-[40px] lg:w-[228px] lg:h-[54px] relative'
            >
              <Image
                src={LogoAccenture}
                alt='Logotipo da empresa Accenture'
                fill
              />
            </MotionDiv>
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
              className='w-[160px] h-[44px] md:w-[200px] md:h-[56px] lg:w-[270px] lg:h-[72px] relative'
            >
              <Image src={LogoTCS} alt='Logotipo da empresa TCS' fill />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
      <div className='relative -mt-24 md:-mt-40 lg:-mt-60 2xl:-mt-80'>
        <svg
          id='wave-partners-shadow'
          className='rotate-0 duration-300 absolute -top-2'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-partners-shadow'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(0,0,0,.25)' offset='0%'></stop>
              <stop stopColor='rgba(0,0,0,.25)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-partners-shadow)'
            d='M0,150L120,129.2C240,108,480,67,720,75C960,83,1200,142,1440,154.2C1680,167,1920,133,2160,112.5C2400,92,2640,83,2880,104.2C3120,125,3360,175,3600,175C3840,175,4080,125,4320,104.2C4560,83,4800,92,5040,91.7C5280,92,5520,83,5760,87.5C6000,92,6240,108,6480,116.7C6720,125,6960,125,7200,104.2C7440,83,7680,42,7920,45.8C8160,50,8400,100,8640,104.2C8880,108,9120,67,9360,50C9600,33,9840,42,10080,75C10320,108,10560,167,10800,195.8C11040,225,11280,225,11520,195.8C11760,167,12000,108,12240,95.8C12480,83,12720,117,12960,145.8C13200,175,13440,200,13680,179.2C13920,158,14160,92,14400,79.2C14640,67,14880,108,15120,137.5C15360,167,15600,183,15840,179.2C16080,175,16320,150,16560,137.5C16800,125,17040,125,17160,125L17280,125L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <svg
          id='wave-partners'
          className='rotate-0 duration-300'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-partners'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(10, 10, 10, 1)' offset='0%'></stop>
              <stop stopColor='rgba(10, 10, 10, 1)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-partners)'
            d='M0,150L120,129.2C240,108,480,67,720,75C960,83,1200,142,1440,154.2C1680,167,1920,133,2160,112.5C2400,92,2640,83,2880,104.2C3120,125,3360,175,3600,175C3840,175,4080,125,4320,104.2C4560,83,4800,92,5040,91.7C5280,92,5520,83,5760,87.5C6000,92,6240,108,6480,116.7C6720,125,6960,125,7200,104.2C7440,83,7680,42,7920,45.8C8160,50,8400,100,8640,104.2C8880,108,9120,67,9360,50C9600,33,9840,42,10080,75C10320,108,10560,167,10800,195.8C11040,225,11280,225,11520,195.8C11760,167,12000,108,12240,95.8C12480,83,12720,117,12960,145.8C13200,175,13440,200,13680,179.2C13920,158,14160,92,14400,79.2C14640,67,14880,108,15120,137.5C15360,167,15600,183,15840,179.2C16080,175,16320,150,16560,137.5C16800,125,17040,125,17160,125L17280,125L17280,250L17160,250C17040,250,16800,250,16560,250C16320,250,16080,250,15840,250C15600,250,15360,250,15120,250C14880,250,14640,250,14400,250C14160,250,13920,250,13680,250C13440,250,13200,250,12960,250C12720,250,12480,250,12240,250C12000,250,11760,250,11520,250C11280,250,11040,250,10800,250C10560,250,10320,250,10080,250C9840,250,9600,250,9360,250C9120,250,8880,250,8640,250C8400,250,8160,250,7920,250C7680,250,7440,250,7200,250C6960,250,6720,250,6480,250C6240,250,6000,250,5760,250C5520,250,5280,250,5040,250C4800,250,4560,250,4320,250C4080,250,3840,250,3600,250C3360,250,3120,250,2880,250C2640,250,2400,250,2160,250C1920,250,1680,250,1440,250C1200,250,960,250,720,250C480,250,240,250,120,250L0,250Z'
          ></path>
        </svg>
        <MotionDiv
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.075,
          }}
          variants={{
            hidden: {
              opacity: 1,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeIn',
                staggerChildren: 0.5,
              },
            },
          }}
          className='bg-neutrals-700 pb-8 lg:pb-0 flex flex-col gap-12 relative items-center before:w-full before:absolute before:bg-neutrals-700 before:h-1 before:-top-[2px] after:w-full after:absolute after:bg-neutrals-700 after:h-1 after:-bottom-[2px]'
        >
          <MotionH4
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
            className='text-white font-bold text-28 leading-8 lg:text-60 lg:leading-65'
          >
            {t('partnersTitle')}
          </MotionH4>
          <MotionDiv className='flex flex-col items-center gap-14'>
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
              className='w-[134px] h-[64px] md:w-[234px] md:h-[56px] lg:w-[342px] lg:h-[82px] relative'
            >
              <Image
                src={LogoZenith}
                alt='Logotipo da empresa Zenith Inova'
                fill
              />
            </MotionDiv>
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
              className='w-[132px] h-[52px] md:w-[176px] md:h-[76px] lg:w-[256px] lg:h-[110px] relative'
            >
              <Image
                src={LogoParatic}
                alt='Logotipo da empresa Pará Tic'
                fill
              />
            </MotionDiv>
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
              className='w-[184px] h-[44px] md:w-[222px] md:h-[54px] lg:w-[324px] lg:h-[78px] relative'
            >
              <Image
                src={LogoVoxdata}
                alt='Logotipo da empresa Voxx Data'
                fill
              />
            </MotionDiv>
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
              className='w-[160px] h-[44px] md:w-[242px] md:h-[62px] lg:w-[310px] lg:h-[90px] relative'
            >
              <Image
                src={LogoIdopter}
                alt='Logotipo da empresa IDopter Labs'
                fill
              />
            </MotionDiv>
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
              className='w-[108px] h-[64px] md:w-[210px] md:h-[142px] lg:w-[212px] lg:h-[126px] relative'
            >
              <Image src={LogoGSA} alt='Logotipo da empresa GSA' fill />
            </MotionDiv>
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
              className='w-[160px] h-[44px] md:w-[98px] md:h-[98px] lg:w-[142px] lg:h-[142px] relative'
            >
              <Image
                src={LogoEduTech}
                alt='Logotipo da empresa Edu Tech'
                fill
              />
            </MotionDiv>
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
              className='w-[124px] h-[72px] md:w-[168px] md:h-[96px] lg:w-[244px] lg:h-[140px] relative'
            >
              <Image src={LogoJambu} alt='Logotipo da empresa Jambu' fill />
            </MotionDiv>
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
              className='w-[160px] h-[44px] md:w-[164px] md:h-[58px] lg:w-[240px] lg:h-[86px] relative'
            >
              <Image
                src={LogoEasyGestor}
                alt='Logotipo da empresa Easy Gestor'
                fill
              />
            </MotionDiv>
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
              className='w-[160px] h-[44px] md:w-[144px] md:h-[66px] lg:w-[210px] lg:h-[96px] relative'
            >
              <Image src={LogoW3} alt='Logotipo da empresa W3 Schools' fill />
            </MotionDiv>
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
              className='w-[102px] h-[42px] md:w-[140px] md:h-[56px] lg:w-[204px] lg:h-[82px] relative'
            >
              <Image src={LogoSol} alt='Logotipo da empresa Sol' fill />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
        <svg
          id='wave-partners-end'
          className='rotate-180 duration-300'
          viewBox='0 0 1440 250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='sw-gradient-wave-partners-end'
              x1='0'
              x2='0'
              y1='1'
              y2='0'
            >
              <stop stopColor='rgba(10, 10, 10, 1)' offset='0%'></stop>
              <stop stopColor='rgba(10, 10, 10, 1)' offset='100%'></stop>
            </linearGradient>
          </defs>
          <path
            className='translate-x-0 translate-y-0 opacity-100'
            fill='url(#sw-gradient-wave-partners-end)'
            d='M0,100L80,95.8C160,92,320,83,480,66.7C640,50,800,25,960,37.5C1120,50,1280,100,1440,133.3C1600,167,1760,183,1920,187.5C2080,192,2240,183,2400,175C2560,167,2720,158,2880,150C3040,142,3200,133,3360,116.7C3520,100,3680,75,3840,87.5C4000,100,4160,150,4320,150C4480,150,4640,100,4800,104.2C4960,108,5120,167,5280,179.2C5440,192,5600,158,5760,154.2C5920,150,6080,175,6240,154.2C6400,133,6560,67,6720,50C6880,33,7040,67,7200,91.7C7360,117,7520,133,7680,116.7C7840,100,8000,50,8160,62.5C8320,75,8480,150,8640,166.7C8800,183,8960,142,9120,104.2C9280,67,9440,33,9600,16.7C9760,0,9920,0,10080,8.3C10240,17,10400,33,10560,58.3C10720,83,10880,117,11040,133.3C11200,150,11360,150,11440,150L11520,150L11520,250L11440,250C11360,250,11200,250,11040,250C10880,250,10720,250,10560,250C10400,250,10240,250,10080,250C9920,250,9760,250,9600,250C9440,250,9280,250,9120,250C8960,250,8800,250,8640,250C8480,250,8320,250,8160,250C8000,250,7840,250,7680,250C7520,250,7360,250,7200,250C7040,250,6880,250,6720,250C6560,250,6400,250,6240,250C6080,250,5920,250,5760,250C5600,250,5440,250,5280,250C5120,250,4960,250,4800,250C4640,250,4480,250,4320,250C4160,250,4000,250,3840,250C3680,250,3520,250,3360,250C3200,250,3040,250,2880,250C2720,250,2560,250,2400,250C2240,250,2080,250,1920,250C1760,250,1600,250,1440,250C1280,250,1120,250,960,250C800,250,640,250,480,250C320,250,160,250,80,250L0,250Z'
          ></path>
        </svg>
      </div>
      <MotionDiv
        initial='hidden'
        whileInView='show'
        viewport={{
          once: true,
          amount: 0.25,
        }}
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
        className='text-black text-center px-8 gap-6 flex items-center justify-center flex-col mt-12 lg:mt-20'
      >
        <MotionSpan
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
          className='text-40 font-bold leading-[44px] md:text-60 md:leading-[66px] text-balance max-w-[24ch] md:max-w-none'
        >
          {t('footerTitle')}
        </MotionSpan>
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
          className='text-16 font-normal leading-4 max-w-[54ch] md:max-w-[90ch] mx-auto md:text-18 md:leading-5 lg:text-20 lg:leading-6 text-balance'
        >
          {t('footerDescription')}
        </MotionP>
        <Button asChild>
          <a href={`mailto:${emailAddress}`} target='_blank'>
            {t('footerButtonText')}
          </a>
        </Button>
      </MotionDiv>
    </div>
  )
}
