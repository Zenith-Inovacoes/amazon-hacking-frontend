import { Overlay, OverlayTrigger, OverlayContent } from '@/components/atoms'
import Image from 'next/image'
import PublicPrizeOverlayImage from 'public/images/Public-Prize-Overlay.svg'

const Wave = () => {
  return (
    <div className='relative after:absolute after:w-full after:h-2 after:bg-primary-200 after:-top-1'>
      <svg
        id='public-prize-overlay-wave'
        className='rotate-180 duration-300 relative z-10'
        viewBox='0 0 1440 230'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='public-prize-overlay-wave-gradient'
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
          fill='url(#public-prize-overlay-wave-gradient)'
          d='M0,115L120,99.7C240,84,480,54,720,34.5C960,15,1200,8,1440,30.7C1680,54,1920,107,2160,138C2400,169,2640,176,2880,161C3120,146,3360,107,3600,95.8C3840,84,4080,100,4320,122.7C4560,146,4800,176,5040,180.2C5280,184,5520,161,5760,126.5C6000,92,6240,46,6480,42.2C6720,38,6960,77,7200,103.5C7440,130,7680,146,7920,157.2C8160,169,8400,176,8640,180.2C8880,184,9120,184,9360,157.2C9600,130,9840,77,10080,46C10320,15,10560,8,10800,26.8C11040,46,11280,92,11520,118.8C11760,146,12000,153,12240,164.8C12480,176,12720,192,12960,168.7C13200,146,13440,84,13680,53.7C13920,23,14160,23,14400,46C14640,69,14880,115,15120,122.7C15360,130,15600,100,15840,76.7C16080,54,16320,38,16560,30.7C16800,23,17040,23,17160,23L17280,23L17280,230L17160,230C17040,230,16800,230,16560,230C16320,230,16080,230,15840,230C15600,230,15360,230,15120,230C14880,230,14640,230,14400,230C14160,230,13920,230,13680,230C13440,230,13200,230,12960,230C12720,230,12480,230,12240,230C12000,230,11760,230,11520,230C11280,230,11040,230,10800,230C10560,230,10320,230,10080,230C9840,230,9600,230,9360,230C9120,230,8880,230,8640,230C8400,230,8160,230,7920,230C7680,230,7440,230,7200,230C6960,230,6720,230,6480,230C6240,230,6000,230,5760,230C5520,230,5280,230,5040,230C4800,230,4560,230,4320,230C4080,230,3840,230,3600,230C3360,230,3120,230,2880,230C2640,230,2400,230,2160,230C1920,230,1680,230,1440,230C1200,230,960,230,720,230C480,230,240,230,120,230L0,230Z'
        ></path>
      </svg>
      <svg
        id='public-prize-overlay-wave-shadow'
        className='rotate-180 duration-300 absolute -bottom-2 z-0'
        viewBox='0 0 1440 230'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='public-prize-overlay-wave-shadow-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stopColor='rgba(0,0,0,.3)' offset='0%'></stop>
            <stop stopColor='rgba(0,0,0,.3)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#public-prize-overlay-wave-shadow-gradient)'
          d='M0,115L120,99.7C240,84,480,54,720,34.5C960,15,1200,8,1440,30.7C1680,54,1920,107,2160,138C2400,169,2640,176,2880,161C3120,146,3360,107,3600,95.8C3840,84,4080,100,4320,122.7C4560,146,4800,176,5040,180.2C5280,184,5520,161,5760,126.5C6000,92,6240,46,6480,42.2C6720,38,6960,77,7200,103.5C7440,130,7680,146,7920,157.2C8160,169,8400,176,8640,180.2C8880,184,9120,184,9360,157.2C9600,130,9840,77,10080,46C10320,15,10560,8,10800,26.8C11040,46,11280,92,11520,118.8C11760,146,12000,153,12240,164.8C12480,176,12720,192,12960,168.7C13200,146,13440,84,13680,53.7C13920,23,14160,23,14400,46C14640,69,14880,115,15120,122.7C15360,130,15600,100,15840,76.7C16080,54,16320,38,16560,30.7C16800,23,17040,23,17160,23L17280,23L17280,230L17160,230C17040,230,16800,230,16560,230C16320,230,16080,230,15840,230C15600,230,15360,230,15120,230C14880,230,14640,230,14400,230C14160,230,13920,230,13680,230C13440,230,13200,230,12960,230C12720,230,12480,230,12240,230C12000,230,11760,230,11520,230C11280,230,11040,230,10800,230C10560,230,10320,230,10080,230C9840,230,9600,230,9360,230C9120,230,8880,230,8640,230C8400,230,8160,230,7920,230C7680,230,7440,230,7200,230C6960,230,6720,230,6480,230C6240,230,6000,230,5760,230C5520,230,5280,230,5040,230C4800,230,4560,230,4320,230C4080,230,3840,230,3600,230C3360,230,3120,230,2880,230C2640,230,2400,230,2160,230C1920,230,1680,230,1440,230C1200,230,960,230,720,230C480,230,240,230,120,230L0,230Z'
        ></path>
      </svg>
    </div>
  )
}

export default function PublicPrizeOverlay() {
  return (
    <Overlay>
      <OverlayTrigger asChild>
        <button className='inline font-bold underline pl-1'>
          Saiba mais sobre...
        </button>
      </OverlayTrigger>
      <OverlayContent className='pb-20'>
        <div className='bg-primary-200 rounded-t-[48px] pt-20 px-12 flex flex-col gap-14 items-center lg:px-16 xl:flex-row xl:justify-between relative'>
          <div className='flex flex-col justify-center items-center gap-6 md:gap-7 lg:gap-6 xl:flex-1'>
            <span className='text-white font-bold text-24 leading-6 text-left md:text-50 md:leading-[54px] lg:text-60 lg:leading-62'>
              Prêmio Conceição Rangel Fiúza de Melo: Legado e Inovação no CESUPA
            </span>
            <p className='text-white font-normal text-16 leading-6 md:text-18 lg:text-20'>
              O Prêmio Conceição Rangel Fiúza de Melo é uma homenagem ao legado
              da Professora Conceição, pioneira na fundação dos cursos de
              Tecnologia no CESUPA. Desde a implementação do primeiro curso em
              1990, até sua longa gestão na Área de Ciências Exatas e
              Tecnologia, sua liderança estratégica e decisões firmes foram
              cruciais para o nosso crescimento. O prêmio é determinado pela
              votação pública, durante a maior celebração tecnológica da
              instituição, a Computação Amostra.
            </p>
          </div>
          <div className='relative w-full h-[254px] md:h-[320px] xl:w-[442px] xl:flex-1'>
            <Image
              src={PublicPrizeOverlayImage}
              alt='Um homem e uma mulher pulando segurando um prêmio'
              fill
            />
          </div>
        </div>
        <Wave />
      </OverlayContent>
    </Overlay>
  )
}
