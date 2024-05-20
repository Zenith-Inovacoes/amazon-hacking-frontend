import {
  Overlay,
  OverlayContent,
  OverlayTrigger,
} from '@/components/atoms/Overlay'
import { ZenithOverlayProps } from './types'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import { cn } from '@/services/utils/className.utils'

import OverlayImg1 from 'public/ZenithOverlay1.svg'
import OverlayImg2 from 'public/ZenithOverlay2.svg'
import OverlayImg2Tablet from 'public/ZenithOverlay2Tablet.svg'
import OverlayImg3 from 'public/ZenithOverlay3.svg'

import BottomWave from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWave.svg'
import BottomWaveShadow from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWaveShadow.svg'
import WaveTablet from 'public/ZenithWaves/ZenithOverlay/Tablet/Wave.svg'
import WaveDesktop from 'public/ZenithWaves/ZenithOverlay/Desktop/Wave.svg'

const ZenithOverlay = ({ overlayTrigger, className }: ZenithOverlayProps) => {
  return (
    <Overlay>
      <OverlayTrigger className={cn(className)}>
        {overlayTrigger}
      </OverlayTrigger>
      <OverlayContent theme='light' className='text-white'>
        <div className='flex flex-col'>
          <div className='flex flex-col zenith-overlay-shadow bg-secondary-400 w-full h-fit gap-4 *:gap-[6px] pt-[100px] px-7 items-start justify-center pb-6 md:pt-[145px] md:gap-7 *:md:gap-7 md:pb-[126px] md:px-[60px] lg:flex-row *:lg:gap-[42px] lg:gap-[42px] lg:px-[90px] lg:py-[135px] rounded-t-[48px]'>
            <div className='flex flex-col w-full h-full lg:items-center lg:justify-center lg:my-auto'>
              <h1 className='text-white font-bold text-40 leading-[1.1 md:text-50 lg:text-60'>
                Não há limites para inovar
              </h1>
              <p className='text-base tracking-[0.192px] text-white max-w-[61vw] sm:max-w-full md:text-18 md:tracking-[0.216px] md:mb-8 lg:mb-0 lg:pr-[95px] lg:text-20 lg:tracking-[0.24px]'>
                Um projeto que evoluiu para uma startup. A Zenith Inova trabalha
                incansavelmente com foco no desenvolvimento da Amazônia.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-7'>
              <Image
                src={OverlayImg1}
                alt='Overlay Image 1'
                className='w-full h-fit max-w-[300px] md:max-w-[462px]'
              />
            </div>
          </div>

          <div className='flex xs:flex-row py-[52px] px-7 xs:pr-1 flex-col xs:items-end xs:justify-between justify-center items-center md:flex-col md:items-center md:px-[60px] md:gap-[60px] md:py-36 lg:flex-row lg:px-[90px] lg:py-[135px]'>
            <div className='flex flex-col gap-7 md:w-full md:items-start'>
              <h1 className='text-black font-bold text-40 leading-[1.1] max-w-[44.7vw] md:max-w-[560px] md:text-50 lg:text-60'>
                Conectar e cultivar o futuro
              </h1>
              <p className='text-base tracking-[0.192px] text-black max-w-[42.35vw] md:max-w-full md:tracking-[0.216px] md:text-18 lg:text-20 lg:tracking-[0.24px]'>
                Nossa missão é solucionar problemas pertinentes na região
                amazônica, buscando alcançar os mais altos níveis de satisfação
                de quem realmente importa:{' '}
                <span className='font-bold'>Você.</span>
              </p>
            </div>
            <Image
              src={OverlayImg2}
              alt='Overlay Img 2'
              className='w-full h-fit max-w-[160px] md:hidden'
            />
            <Image
              src={OverlayImg2Tablet}
              alt='Overlay Img 2'
              className='hidden w-full h-fit max-w-[462px] md:block'
            />
          </div>

          <div className='relative flex flex-col bg-secondary-400 px-[38px] gap-4 pt-9 items-center justify-center pb-[130px] md:gap-7 md:px-0 md:pb-0 lg:pt-[135px] lg:gap-[42px]'>
            <h1 className='text-white font-bold text-40 leading-[1.1] text-center md:text-50 md:max-w-[560px] lg:text-60'>
              Guiados pela paixão da inovação
            </h1>
            <p className='text-base tracking-[0.192px] text-white text-center px-5 mb-1 md:text-18 md:tracking-[0.216px] md:max-w-[460px] lg:text-20 lg:tracking-[0.24]px'>
              Descubra como a Zenith Inova está transformando nossa região com
              tecnologia e sustentabilidade.
            </p>
            <Button variant='secondary' className='w-fit'>
              Explorar Mais
            </Button>
            <div className='hidden relative w-full h-fit items-end justify-start md:flex overflow-hidden'>
              <Image src={WaveTablet} alt='Tablet Wave' className='lg:hidden' />
              <Image
                src={WaveDesktop}
                alt='Desktop Wave'
                className='hidden lg:block'
              />
              <div className='absolute w-full h-fit'>
                <Image
                  src={OverlayImg3}
                  alt='Overlay Image 3'
                  className='min-w-[477px] translate-x-44 -translate-y-20 lg:translate-x-96 lg:-translate-y-10'
                />
              </div>
            </div>
          </div>
          <Image
            src={BottomWave}
            alt='Bottom Wave'
            className='-translate-y-[27vw] z-50 md:hidden'
          />
          <Image
            src={BottomWaveShadow}
            alt='Bottom Wave Shadow'
            className='-translate-y-[60.5vw] blur-[2px] md:hidden max-w-full'
          />
          <div className='flex w-full h-fit items-center justify-center -mt-[60.5vw] mb-8 md:hidden'>
            <Image src={OverlayImg3} alt='Overlay Image 3' />
          </div>
        </div>
      </OverlayContent>
    </Overlay>
  )
}

export default ZenithOverlay
