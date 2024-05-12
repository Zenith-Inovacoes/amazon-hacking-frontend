import {
  Overlay,
  OverlayTrigger,
  OverlayContent,
} from '@/components/atoms/Overlay'
import { ProjectOverlayProps } from './types'
import Image from 'next/image'

import {
  PiTwitterLogoFill,
  PiInstagramLogo,
  PiFacebookLogoBold,
} from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'

import FirstWaveTop from 'public/ProjectOverlay/Mobile/FirstWaveTop.svg'
import FirstWaveBottom from 'public/ProjectOverlay/Mobile/FirstWaveBottom.svg'

import SecondWaveMobile from 'public/ProjectOverlay/Mobile/SecondWave.svg'
import SecondWaveTablet from 'public/ProjectOverlay/Tablet/SecondWave.svg'

import { SocialMediaButton } from '@/components/atoms'

const ProjectOverlay = ({
  children,
  videoURL,
  videoTitle,
  twitter,
  whatsapp,
  instagram,
  facebook,
  overlayTrigger,
}: ProjectOverlayProps) => {
  return (
    <Overlay>
      <OverlayTrigger asChild>{overlayTrigger}</OverlayTrigger>
      <OverlayContent theme='dark'>
        <div className='flex flex-col items-center justify-center gap-[108px] w-full h-full pb-36 overflow-hidden md:gap-[111px]'>
          <div className='flex flex-col w-full h-full items-center gap-[108px] px-6 pt-5 md:px-[65px] md:gap-[111px] lg:px-[102px]'>
            <div className='flex flex-col items-center justify-center gap-[22px] w-full h-fit md:gap-[28px]'>
              <h1 className='text-start text-black font-bold leading-[1.1] text-40 md:w-full md:text-50 lg:text-60'>
                {children.solutionName}
              </h1>
              <div className='bg-black w-full max-w-[400px] h-fit py-14 px-4 rounded-[20px] flex justify-center md:order-2 md:py-36 md:max-w-[412px] md:px-11'>
                <Image
                  src={children.teamLogo}
                  alt={children.altLogo}
                  className='w-full h-fit max-w-[204px] md:max-w-[325px]'
                />
              </div>
              <p className='text-base tracking-[0.192px] leading-[20px] text-black px-3 md:px-0 md:mb-8 md:text-18 md:tracking-[0.216px] lg:text-20 lg:tracking-[0.24px]'>
                {children.solutionDescription}
              </p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[22px] w-full h-fit'>
              <h1 className='text-center text-black font-bold leading-[1.1] text-40 md:text-50 lg:text-60'>
                Equipe
              </h1>
              <h2 className='text-center text-base leading-tight tracking-[0.192px] text-black px-3 md:text-18 md:leading-[20px] md:tracking-[0.216px] md:mb-[60px] lg:text-20 lg:tracking-[0.24px]'>
                Conheça a equipe de alunos que formam essa solução:
              </h2>
              <div className='w-fit px-9 h-fit'>
                <div className='projectOverlayShadow w-full h-fit rounded-[10px] flex flex-col items-center p-5 md:mb-[71px] md:px-[60px] md:py-10'>
                  <ul className='block md:grid md:place-items-center md:grid-cols-2 md:gap-4'>
                    {children.teamMembers.map((member, idx) => (
                      <li
                        key={idx}
                        className='flex text-black text-20 font-medium leading-[1.35] tracking-[0.24px] w-full text-start text-nowrap lg:text-24 lg:leading-[27px] lg:tracking-[0.288px]'
                      >
                        <div className='mr-2'>•</div>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full h-full'>
            <Image
              src={FirstWaveTop}
              alt='First Wave Top Shadow'
              className='translate-y-[18vw] -mt-[18vw] blur-[2px] opacity-30 -rotate-1 scale-x-105 lg:translate-y-[19vw] lg:-mt-[19vw] xl:translate-y-[min(19vw,270px)] xl:-mt-[min(19vw,270px)]'
            />
            <Image src={FirstWaveTop} alt='First Wave Top' />
            <div className='flex flex-col gap-[22px] w-full h-fit bg-black px-6 items-center justify-center outline outline-2 outline-black md:gap-[42px] md:px-[65px] lg:px-[102px]'>
              <h1 className='text-white text-center font-bold text-40 leading-[1.1] md:text-50 lg:text-60'>
                Elevator Pitch
              </h1>
              <iframe
                src={videoURL}
                title={videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='rounded-[21px] w-full max-w-[400px] aspect-video md:max-w-[700px]'
              ></iframe>
            </div>
            <Image
              src={FirstWaveBottom}
              alt='First Wave Bottom'
              className='-scale-x-[1.75]'
            />
          </div>

          <div className='relative flex flex-col w-full h-full translate-y-1/2 mb-[50%] md:mb-[20%]'>
            <Image
              src={SecondWaveMobile}
              alt='Second Wave'
              fill
              className='-z-50 scale-[2.65] md:hidden'
            />
            <Image
              src={SecondWaveTablet}
              alt='Second Wave'
              fill
              className='-z-50 scale-[3] hidden md:block translate-x-12 lg:scale-[3.5] lg:translate-x-20'
            />
            <div className='flex flex-col gap-[22px] w-full h-fit px-6 items-center justify-center pb-11 md:px-[65px] lg:px-[102px]'>
              <h1 className='text-white text-center font-bold text-40 leading-[1.1] md:text-50 lg:text-60'>
                Compartilhar
              </h1>
              <div className='flex gap-5 items-center justify-center'>
                <SocialMediaButton href={twitter}>
                  <PiTwitterLogoFill size={46} />
                </SocialMediaButton>
                <SocialMediaButton href={instagram}>
                  <PiInstagramLogo size={46} />
                </SocialMediaButton>
                <SocialMediaButton href={whatsapp}>
                  <FaWhatsapp size={46} />
                </SocialMediaButton>
                <SocialMediaButton href={facebook}>
                  <PiFacebookLogoBold size={46} />
                </SocialMediaButton>
              </div>
            </div>
          </div>
        </div>
      </OverlayContent>
    </Overlay>
  )
}

export default ProjectOverlay
