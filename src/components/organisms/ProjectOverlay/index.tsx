'ues client'

import {
  Overlay,
  OverlayTrigger,
  OverlayContent,
} from '@/components/atoms/Overlay'
import { ProjectOverlayProps } from './types'
import Image from 'next/image'
import { cn } from '@/services/utils/className.utils'

import {
  PiTwitterLogoFill,
  PiInstagramLogo,
  PiFacebookLogoBold,
} from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'

import FirstWaveTop from 'public/ProjectOverlayWaves/Mobile/FirstWaveTop.svg'
import FirstWaveBottom from 'public/ProjectOverlayWaves/Mobile/FirstWaveBottom.svg'

import SecondWaveMobile from 'public/ProjectOverlayWaves/Mobile/SecondWave.png'
import SecondWaveTablet from 'public/ProjectOverlayWaves/Tablet/SecondWave.png'

import PersonalGoals from 'public/PersonalGoals.svg'

import { Button, SocialMediaButton } from '@/components/atoms'
import { signIn } from 'next-auth/react'

const ProjectOverlay = ({
  children,
  videoURL,
  videoTitle,
  twitter,
  whatsapp,
  instagram,
  facebook,
  variant = 'current',
}: ProjectOverlayProps) => {
  return (
    <Overlay>
      <OverlayTrigger asChild>{children.overlayTrigger}</OverlayTrigger>
      <OverlayContent theme='dark'>
        <div className='flex flex-col items-center justify-center gap-[108px] w-full h-full pb-36 overflow-visible md:gap-[111px]'>
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
                  <ul className='flex flex-col md:grid md:place-items-center md:grid-cols-2 gap-3 md:gap-4'>
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
              alt='sdsdf'
              className='translate-y-[18vw] -mt-[18vw] blur-[2px] opacity-30 -rotate-1 scale-x-105 lg:translate-y-[19vw] lg:-mt-[19vw] xl:translate-y-[min(19vw,270px)] xl:-mt-[min(19vw,270px)]'
            />
            <Image
              src={FirstWaveTop}
              alt='First Wave Top'
              className='scale-x-105'
            />
            <div className='flex flex-col gap-[22px] w-full h-fit bg-black px-6 items-center justify-center outline outline-2 outline-black md:gap-[42px] md:px-[65px] lg:px-[102px] scale-[1.01]'>
              <h1 className='text-white text-center font-bold text-40 leading-[1.1] md:text-50 lg:text-60'>
                Elevator Pitch
              </h1>
              <iframe
                src={videoURL}
                title={videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='rounded-[21px] w-full max-w-[400px] aspect-video md:max-w-[700px] lg:max-w-[1000px]'
              ></iframe>
            </div>
            <Image
              src={FirstWaveBottom}
              alt='First Wave Bottom'
              className='-scale-x-[1.75]'
            />
          </div>

          <div
            className={cn(
              variant === 'past'
                ? 'hidden'
                : 'flex flex-col w-full h-full items-center justify-center gap-6 mb-[108px] px-6 md:px-[65px] md:mb-[150px] lg:px-[265px] lg:mb-[230px]'
            )}
          >
            <h1 className='font-bold leading-[1.1] text-40 text-center text-black md:text-50 lg:text-60'>
              Escolha seu favorito:
            </h1>
            <p className='tracking-[0.192px] text-base text-center text-black md:tracking-[0.216px] md:text-18 lg:text-20 lg:tracking-[0.24px]'>
              Cada voto conta para destacar as ideias mais promissoras e
              inspiradoras de 2024. Não perca a chance de apoiar a criatividade
              e a inovação!
            </p>
            <h2 className='font-bold tracking-[0.192px] text-base text-center text-black md:tracking-[0.216px] md:text-18 lg:text-20 lg:tracking-[0.24px]'>
              Faça login para prosseguir:
            </h2>
            <Button onClick={() => signIn()}>Fazer Login</Button>
            <span className='font-bold tracking-[0.192px] text-base text-center text-black lg:tracking-[0.216px] lg:text-18'>
              Obs: Seu voto é único
            </span>
          </div>

          <div
            className={cn(
              variant === 'current'
                ? 'hidden'
                : 'flex flex-col w-full h-full gap-[45px] px-6 items-center justify-center mb-8 md:px-[65px] lg:flex-row lg:gap-0 lg:justify-between'
            )}
          >
            <div className='flex flex-col gap-[22px] w-full h-full items-center md:items-start'>
              <h1 className='text-40 font-bold leading-[1.1] text-black w-fit px-3 md:text-50 text-start lg:max-w-[13ch]'>
                Você pode ser o próximo!
              </h1>
              <p className='text-base leading-[20px] tracking-[0.192px] text-black px-3 w-full max-w-[60ch] lg:max-w-[50ch]'>
                Sua solução pode ser a próxima inovação de destaque do Amazon
                Hacking, juntando-se a um hall de projetos incríveis
                apresentados no fim da Jornada.
              </p>
            </div>
            <Image
              src={PersonalGoals}
              alt='Personal Goals'
              className='w-[311px] h-[311px] md:w-[462px] md:h-[462px]'
            />
          </div>

          <div className='relative flex flex-col w-full h-full mb-[50%] md:mb-[20%]'>
            <Image
              src={SecondWaveMobile}
              alt='Second Wave'
              priority
              className='absolute -z-50 md:hidden w-full h-fit max-w-[600px] right-0'
            />
            <Image
              src={SecondWaveTablet}
              alt='Second Wave'
              priority
              className='absolute -z-50 hidden md:block translate-x-12 lg:translate-x-20 w-full max-w-[1024px] right-0'
            />
            <div className='flex flex-col gap-[22px] w-full h-fit px-6 items-center justify-center pb-11 md:px-[65px] lg:px-[102px] mt-[min(25vw,320px)]'>
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
