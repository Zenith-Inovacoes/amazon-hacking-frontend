import Image from 'next/image'
import ZenithLogo from 'public/ZenithWhiteLogo.svg'
import Link from '@/components/atoms/Link'
import ZenithOverlay from './ZenithOverlay'
import Button from '@/components/atoms/Button'
import SocialMediaButton from '@/components/atoms/SocialMediaButton'

import TopWave from 'public/ZenithWaves/Mobile/TopWave.svg'
import TopWaveShadow from 'public/ZenithWaves/Mobile/TopWaveShadow.svg'

import TopWaveTablet from 'public/ZenithWaves/Tablet/TopWave.svg'
import TopWaveShadowTablet from 'public/ZenithWaves/Tablet/TopWaveShadow.svg'

import TopWaveDesktop from 'public/ZenithWaves/Desktop/TopWave.svg'
import TopWaveShadowDesktop from 'public/ZenithWaves/Desktop/TopWaveShadow.svg'

import BottomWave from 'public/ZenithWaves/Mobile/BottomWave.svg'
import BottomWaveShadow from 'public/ZenithWaves/Mobile/BottomWaveShadow.svg'

import WhatsappIcon from 'public/icons/whatsapp.svg'
import InstagramIcon from 'public/icons/instagram.svg'
import LinkedInIcon from 'public/icons/linkedin.svg'
import { sections } from '@/constants/sections'

import { useTranslations } from 'next-intl';

const Zenith = () => {
  const t = useTranslations("Home.Zenith")

  return (
    <section
      id={sections.zenith}
      className='relative flex w-full h-full justify-center flex-col bg-white z-[25]'
    >
      <Image
        src={TopWaveShadow}
        alt='First Wave Top Shadow'
        className='-mb-[34vw] translate-y-[2vw] blur-[2px] opacity-30 scale-y-[1.01] md:hidden'
      />
      <Image
        src={TopWave}
        alt='Zenith Top Wave'
        className='-mb-[21vw] w-full h-full scale-y-[1.01] md:hidden'
      />

      <Image
        src={TopWaveShadowTablet}
        alt='Top Wave Shadow'
        className='hidden md:block -mb-[35.5vw] translate-y-0 blur-[2px] opacity-30 lg:hidden'
      />
      <Image
        src={TopWaveTablet}
        alt='Zenith Top Wave'
        className='hidden md:block -mb-[24vw] translate-y-0 lg:hidden'
      />

      <Image
        src={TopWaveShadowDesktop}
        alt='Top Wave Shadow'
        className='hidden lg:block -scale-x-100 -mt-[12vw] -mb-[23.1vw] min-w-[100vw] translate-y-0 blur-[2px] opacity-30'
      />
      <Image
        src={TopWaveDesktop}
        alt='Zenith Top Wave'
        className='hidden lg:block -mt-[12vw] -mb-[12vw] translate-y-0 min-w-[100vw] -scale-x-100'
      />
      <div className="flex w-full h-full items-center justify-center pt-20 pb-32 bg-secondary-400 sm:pt-32 md:py-[200px] lg:py-[21vw]">
        <div className="flex flex-col max-w-screen-2xl pt-[70px] w-full h-full items-center justify-center px-8 gap-5 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:place-items-center lg:justify-items-stretch lg:px-[100px]">
          <h1 className="font-bold text-40 leading-[1.1] text-white w-fit md:text-50 lg:text-60 mb-10 order-1 md:mb-0 lg:max-w-[15ch] lg:col-start-1">
            {t("title")}
          </h1>
          <p className="text-center text-base tracking-[0.192px] text-white max-w-[50ch] md:text-18 md:max-w-full md:pr-12 md:text-start lg:text-20 lg:tracking-[0.24px] mb-5 order-3 md:order-2 md:mb-[52px] lg:col-start-1 lg:mb-0 lg:self-end">
            {t("subtitle")}
          </p>
          <div className='order-4 md:order-5 lg:col-start-1'>
            <ZenithOverlay
              overlayTrigger={
                <Button variant="secondary" className="px-10">
                  {t("buttonText")}
                </Button>
              }
            />
          </div>
          <div className='flex w-fit justify-center items-center md:mt-0 mt-[10px] order-6 lg:col-start-1 lg:mt-4'>
            <Link
              href='https://linktr.ee/zenithinova'
              className='h-fit text-white *:text-base *:font-semibold *:tracking-[0.192px] md:*:text-18 md:*:tracking-[0.216px] text-nowrap'
              target='_blank'
            >
              {t("linkText")}
            </Link>
          </div>
          <Image
            src={ZenithLogo}
            alt='Zenith Logo'
            className='w-full h-fit max-w-[300px] md:max-w-[493px] px-4 mb-5 md:order-3 order-2 lg:max-w-[600px] lg:self-end lg:px-0 lg:mb-0'
          />
          <div className='flex gap-6 md:mb-[52px] md:gap-[60px] justify-center items-center order-5 md:order-4 lg:self-end lg:translate-y-11 lg:mb-0'>
            <SocialMediaButton href='https://www.whatsapp.com/'>
              <Image
                src={WhatsappIcon}
                alt='Whatsapp Icon'
                className='w-8 h-8 cursor-pointer md:w-12 md:h-12'
              />
            </SocialMediaButton>
            <SocialMediaButton href='https://www.instagram.com/zenith.inova/'>
              <Image
                src={InstagramIcon}
                alt='Instagram Icon'
                className='w-8 h-8 cursor-pointer md:w-12 md:h-12'
              />
            </SocialMediaButton>
            <SocialMediaButton href='https://br.linkedin.com/company/zenith-inova'>
              <Image
                src={LinkedInIcon}
                alt='LinkedIn Icon'
                className='w-8 h-8 cursor-pointer md:w-12 md:h-12'
              />
            </SocialMediaButton>
          </div>
        </div>
      </div>
      <Image
        src={BottomWaveShadow}
        alt='First Wave Top Shadow'
        className='-mt-[7.5vw] -translate-y-[1vw] blur-[2px] opacity-30 scale-y-[1.01] min-w-[100vw] md:-translate-y-[0.5vw] lg:-translate-y-[0.1vw]'
      />
      <Image
        src={BottomWave}
        alt='Zenith Bottom Wave'
        className='-mt-[7.5vw] w-full h-full scale-y-[1.01] min-w-[100vw]'
      />
    </section>
  )
}

export default Zenith
