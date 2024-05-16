import {
  Overlay,
  OverlayContent,
  OverlayTrigger,
} from '@/components/atoms/Overlay'
import { ZenithOverlayProps } from './types'
import Image from 'next/image'

import OverlayImg1 from 'public/ZenithOverlay1.svg'
import OverlayImg2 from 'public/ZenithOverlay2.svg'
import OverlayImg3 from 'public/ZenithOverlay3.svg'

import BottomWave from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWave.svg'
import BottomWaveShadow from 'public/ZenithWaves/ZenithOverlay/Mobile/BottomWaveShadow.svg'

import Button from '@/components/atoms/Button'

const ZenithOverlay = ({ overlayTrigger }: ZenithOverlayProps) => {
  return (
    <Overlay>
      <OverlayTrigger>{overlayTrigger}</OverlayTrigger>
      <OverlayContent theme='light' className='text-white overflow-hidden'>
        <div className='flex flex-col'>
          <div className='flex flex-col zenith-overlay-shadow bg-secondary-400 w-full h-fit gap-[6px] pt-[100px] px-7 items-start justify-center pb-6'>
            <h1 className='text-white font-bold text-40 leading-[1.1] mb-[6px]'>
              Não há limites para inovar
            </h1>
            <p className='text-base tracking-[0.192px] text-white max-w-[61vw] sm:max-w-full'>
              Um projeto que evoluiu para uma startup. A Zenith Inova trabalha
              incansavelmente com foco no desenvolvimento da Amazônia.
            </p>
            <div className='flex w-full items-center justify-center'>
              <Image
                src={OverlayImg1}
                alt='Overlay Image 1'
                className='w-full h-fit px-7 max-w-[300px]'
              />
            </div>
          </div>

          <div className='flex xs:flex-row py-[52px] xs:pr-1 px-7 flex-col xs:items-end xs:justify-between justify-center items-center'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-black font-bold text-40 leading-[1.1] max-w-[44.7vw]'>
                Conectar e cultivar o futuro
              </h1>
              <p className='text-base tracking-[0.192px] text-black max-w-[42.35vw]'>
                Nossa missão é solucionar problemas pertinentes na região
                amazônica, buscando alcançar os mais altos níveis de satisfação
                de quem realmente importa:{' '}
                <span className='font-bold'>Você.</span>
              </p>
            </div>
            <Image
              src={OverlayImg2}
              alt='Overlay Img 2'
              className='w-full h-fit max-w-[160px]'
            />
          </div>

          <div className='flex flex-col bg-secondary-400 px-[38px] gap-4 pt-9 items-center justify-center pb-[130px]'>
            <h1 className='text-white font-bold text-40 leading-[1.1] text-center'>
              Guiados pela paixão da inovação
            </h1>
            <p className='text-base tracking-[0.192px] text-white text-center px-5 mb-1'>
              Descubra como a Zenith Inova está transformando nossa região com
              tecnologia e sustentabilidade.
            </p>
            <Button variant='secondary' className='w-fit'>
              Explorar Mais
            </Button>
          </div>
          <Image
            src={BottomWave}
            alt='Bottom Wave'
            className='-translate-y-[27vw] scale-[1.01] z-50'
          />
          <Image
            src={BottomWaveShadow}
            alt='Bottom Wave Shadow'
            className='-translate-y-[60.5vw] scale-[1.01] blur-[2px]'
          />
          <div className='flex w-full h-fit items-center justify-center -mt-[60.5vw] mb-8'>
            <Image src={OverlayImg3} alt='Overlay Image 3' />
          </div>
        </div>
      </OverlayContent>
    </Overlay>
  )
}

export default ZenithOverlay
