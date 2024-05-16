import {
  Overlay,
  OverlayContent,
  OverlayTrigger,
} from '@/components/atoms/Overlay'
import { ZenithOverlayProps } from './types'
import Image from 'next/image'

import OverlayImg1 from 'public/ZenithOverlay1.svg'
import OverlayImg2 from 'public/ZenithOverlay2.svg'
import OverlayImg2Tablet from 'public/ZenithOverlay2Tablet.svg'
import OverlayImg3 from 'public/ZenithOverlay3.svg'

import BottomWave from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWave.svg'
import BottomWaveShadow from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWaveShadow.svg'
import WaveTablet from 'public/ZenithWaves/ZenithOverlay/Tablet/Wave.svg'

import Button from '@/components/atoms/Button'

const ZenithOverlay = ({ overlayTrigger }: ZenithOverlayProps) => {
  return (
    <Overlay>
      <OverlayTrigger>{overlayTrigger}</OverlayTrigger>
      <OverlayContent theme='light' className='text-white overflow-hidden'>
        <div className='flex flex-col'>
          <div className='flex flex-col zenith-overlay-shadow bg-secondary-400 w-full h-fit gap-[6px] pt-[100px] px-7 items-start justify-center pb-6 md:pt-[145px] md:gap-7 md:pb-[126px] md:px-[60px]'>
            <h1 className='text-white font-bold text-40 leading-[1.1] mb-[6px] md:text-50 md:mb-0'>
              Não há limites para inovar
            </h1>
            <p className='text-base tracking-[0.192px] text-white max-w-[61vw] sm:max-w-full md:text-18 md:tracking-[0.216px] md:mb-8'>
              Um projeto que evoluiu para uma startup. A Zenith Inova trabalha
              incansavelmente com foco no desenvolvimento da Amazônia.
            </p>
            <div className='flex w-full items-center justify-center px-7'>
              <Image
                src={OverlayImg1}
                alt='Overlay Image 1'
                className='w-full h-fit max-w-[300px] md:max-w-[462px]'
              />
            </div>
          </div>

          <div className='flex xs:flex-row py-[52px] px-7 flex-col xs:items-end xs:justify-between justify-center items-center md:flex-col md:items-center md:px-[60px] md:gap-[60px] md:py-36'>
            <div className='flex flex-col gap-7 md:w-full md:items-start'>
              <h1 className='text-black font-bold text-40 leading-[1.1] max-w-[44.7vw] md:max-w-[560px] md:text-50'>
                Conectar e cultivar o futuro
              </h1>
              <p className='text-base tracking-[0.192px] text-black max-w-[42.35vw] md:max-w-full md:tracking-[0.216px] md:text-18'>
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

          <div className='relative flex flex-col bg-secondary-400 px-[38px] gap-4 pt-9 items-center justify-center pb-[130px] md:gap-7 md:px-0 md:pb-0'>
            <h1 className='text-white font-bold text-40 leading-[1.1] text-center md:text-50 md:max-w-[560px]'>
              Guiados pela paixão da inovação
            </h1>
            <p className='text-base tracking-[0.192px] text-white text-center px-5 mb-1 md:text-18 md:tracking-[0.216px] md:max-w-[460px]'>
              Descubra como a Zenith Inova está transformando nossa região com
              tecnologia e sustentabilidade.
            </p>
            <Button variant='secondary' className='w-fit'>
              Explorar Mais
            </Button>
            <div className='hidden relative w-full h-fit items-end justify-start md:flex'>
              <Image src={WaveTablet} alt='wave' />
              <div className='absolute w-full h-fit'>
                <Image
                  src={OverlayImg3}
                  alt='Overlay Image 3'
                  className='min-w-[477px] translate-x-44 -translate-y-20'
                />
              </div>
            </div>
          </div>
          <Image
            src={BottomWave}
            alt='Bottom Wave'
            className='-translate-y-[27vw] scale-[1.01] z-50 md:hidden'
          />
          <Image
            src={BottomWaveShadow}
            alt='Bottom Wave Shadow'
            className='-translate-y-[60.5vw] scale-[1.01] blur-[2px] md:hidden'
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
