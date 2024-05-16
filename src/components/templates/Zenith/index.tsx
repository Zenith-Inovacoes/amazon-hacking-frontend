import Image from 'next/image'
import TopWave from 'public/ZenithWaves/Mobile/TopWave.svg'
import TopWaveShadow from 'public/ZenithWaves/Mobile/TopWaveShadow.svg'
import BottomWave from 'public/ZenithWaves/Mobile/BottomWave.svg'
import BottomWaveShadow from 'public/ZenithWaves/Mobile/BottomWaveShadow.svg'
import ZenithLogo from 'public/ZenithWhiteLogo.svg'
import Button from '@/components/atoms/Button'
import SocialMediaButton from '@/components/atoms/SocialMediaButton'

import WhatsappIcon from 'public/icons/whatsapp.svg'
import Link from '@/components/atoms/Link'

const Zenith = () => {
  return (
    <div className='flex w-full h-full justify-center overflow-hidden flex-col'>
      <Image
        src={TopWaveShadow}
        alt='First Wave Top Shadow'
        className='-mb-[34vw] translate-y-[2vw] blur-[2px] opacity-30 scale-x-110 scale-y-[1.01]'
      />
      <Image
        src={TopWave}
        alt='Zenith Top Wave'
        className='-mb-[21vw] w-full h-full scale-y-[1.01] scale-x-110'
      />
      <div className='flex w-full h-full items-center justify-center pt-20 pb-32 bg-secondary-400 sm:pt-32'>
        <div className='flex flex-col max-w-screen-2xl pt-[70px] w-full h-full items-center justify-center px-8 gap-14'>
          <h1 className='font-bold text-40 leading-[1.1] text-white w-fit'>
            O ápice da inovação surgiu daqui.
          </h1>
          <div className='flex flex-col px-4 gap-9 items-center justify-center'>
            <Image
              src={ZenithLogo}
              alt='Zenith Logo'
              className='w-full h-fit max-w-[300px]'
            />
            <p className='text-center text-base tracking-[0.192px] text-white max-w-[50ch]'>
              Nossa trajetória começou no Amazon Hacking, em 2022. Desde então,
              nunca mais paramos.
            </p>
            <div className='flex flex-col gap-5'>
              <Button variant='secondary' className='px-10'>
                Saiba Mais
              </Button>
              <div className='flex gap-5'>
                <SocialMediaButton>
                  <Image
                    src={WhatsappIcon}
                    alt='Whatsapp Icon'
                    className='w-8 h-8 cursor-pointer'
                  />
                </SocialMediaButton>
                <SocialMediaButton>
                  <Image
                    src={WhatsappIcon}
                    alt='Whatsapp Icon'
                    className='w-8 h-8 cursor-pointer'
                  />
                </SocialMediaButton>
                <SocialMediaButton>
                  <Image
                    src={WhatsappIcon}
                    alt='Whatsapp Icon'
                    className='w-8 h-8 cursor-pointer'
                  />
                </SocialMediaButton>
              </div>
            </div>
            <div className='flex w-fit justify-center items-center'>
              <Link
                href='https://zenithinova.com.br'
                className='h-fit *:text-base *:font-semibold *:tracking-[0.192px]'
                target='_blank'
              >
                Explore mais o universo da Zenith
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={BottomWaveShadow}
        alt='First Wave Top Shadow'
        className='-mt-[7.5vw] -translate-y-[1vw] blur-[2px] opacity-30 scale-x-125 scale-y-[1.01]'
      />
      <Image
        src={BottomWave}
        alt='Zenith Bottom Wave'
        className='-mt-[7.5vw] w-full h-full scale-y-[1.01] scale-x-125'
      />
    </div>
  )
}

export default Zenith
