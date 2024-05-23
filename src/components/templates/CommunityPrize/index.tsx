import Image from 'next/image'
import { Button } from '@/components/atoms'
import ProjectOverlay from '@/components/organisms/ProjectOverlay'

import CommunityPrize1 from 'public/images/CommunityPrize1.svg'
import CommunityPrize1Shadow from 'public/images/CommunityPrize1Shadow.svg'

import CommunityPrize2 from 'public/images/CommunityPrize2.svg'
import CommunityPrize2Shadow from 'public/images/CommunityPrize2Shadow.svg'

import CommunityPrize2Tablet from 'public/images/CommunityPrizeTablet2.svg'
import CommunityPrize2TabletShadow from 'public/images/CommunityPrizeTablet2Shadow.svg'

import AranduLogo from 'public/images/AranduLogo.svg'
import { ProjectOverlayChildrenProps } from '@/components/organisms/ProjectOverlay/types'

const CommunityPrize = () => {
  const overlayData: ProjectOverlayChildrenProps = {
    solutionName: 'Curumin',
    teamLogo: AranduLogo,
    solutionDescription:
      'Curumim é um software acessível e simples para a catalogação, empréstimo e devolução de livros utilizando o sistema open source Biblivre integrado a tecnologia RFID.',
    altLogo: 'Logo da Arandu Technology',
    teamMembers: ['Bruna Melido', 'Isadora Lacerda', 'Ícaro Macedo'],
  }

  return (
    <section className='relative bg-white flex flex-col items-center justify-center'>
      <div className='flex flex-col w-full h-full max-w-screen-2xl pt-32 pb-11 gap-[42px] px-6'>
        <div className='flex flex-col w-full items-center justify-center gap-[22px] px-2 md:gap-7'>
          <h1 className='text-black font-bold text-40 leading-[1.1] text-center md:text-50 lg:max-w-[11ch] lg:text-60'>
            Destaque da comunidade
          </h1>
          <p className='text-base text-black tracking-[0.192px] text-center max-w-[505px] md:text-18 md:tracking-[0.216px] lg:text-20 lg:tracking-[0.24px]'>
            Solução selecionada pelos lideres de comunidades por seu impacto
            significativo para a população local, gerando avanço e auxiliando na
            construção de um futuro melhor para os habitantes da nossa região.
          </p>
          <div className='absolute bg-repeat bg-symbol w-full h-full max-h-[87px] sm:translate-y-[435px] translate-y-[520px] opacity-60 inset-0 md:translate-y-[600px]' />
          <Image
            src={CommunityPrize1Shadow}
            alt='Community Prize Shadow'
            className='w-full h-fit max-w-[330px] z-10 opacity-30 blur-[2px] translate-x-[min(2.03vw,8px)] -mb-[min(76.14vw,300px)] md:max-w-[442px] md:-mb-[400px] lg:max-w-[526px] lg:-mb-[475px] lg:translate-x-4'
          />
          <Image
            src={CommunityPrize1}
            alt='Community Prize 1'
            className='w-full h-fit max-w-[330px] z-10 mb-10 md:max-w-[442px] lg:mb-0 lg:max-w-[526px]'
          />
        </div>
        <div className='relative flex flex-col w-full h-full items-center justify-center'>
          <Image
            src={CommunityPrize2Shadow}
            alt='Community Prize Shadow'
            className='absolute w-full h-fit max-w-[372px] translate-x-[min(1.9vw,8px)] -translate-y-[min(2.85vw,12px)] opacity-30 blur-[2px] origin-top md:hidden'
          />
          <Image
            src={CommunityPrize2}
            alt='Community Prize 2'
            className='w-full h-fit max-w-[372px] md:hidden z-10'
          />

          <Image
            src={CommunityPrize2TabletShadow}
            alt='Community Prize Shadow 2'
            className='absolute hidden md:block w-full h-fit max-w-[740px] opacity-30 blur-[2px] -translate-y-3 translate-x-2 lg:max-w-[1050px]'
          />
          <Image
            src={CommunityPrize2Tablet}
            alt='Community Prize 2 Tablet'
            className='hidden md:block w-full h-fit max-w-[740px] z-10 lg:max-w-[1050px]'
          />
          <div className='absolute flex flex-col w-full h-full items-center justify-start gap-[min(25vw,105px)] max-w-[372px] px-8 pt-[min(23.57vw,99px)] md:flex-row md:justify-center md:gap-[26px] md:max-w-[740px] md:py-0 md:pr-[62px] z-20 lg:gap-[71px] md:items-start md:pt-[104px] lg:max-w-[1050px] lg:pt-36'>
            <h1 className='text-white font-bold text-3xl xs:text-40 text-center leading-[1.1] md:w-full md:max-w-[12ch] lg:text-60'>
              Campeão Premio MMIB
            </h1>
            <div className='flex flex-col gap-[min(10vw,42px)] px-4 w-full h-fit items-center justify-center md:gap-[26px] md:px-0 md:h-full md:justify-start md:max-w-[230px]'>
              <Image
                src={AranduLogo}
                alt='Logo Arandu Technology'
                className='w-full h-fit md:max-w-[230px]'
              />
              <ProjectOverlay
                facebook='/'
                twitter='/'
                instagram='/'
                whatsapp='/'
                videoURL='https://www.youtube-nocookie.com/embed/djD7vOYDc9w'
                variant='past'
                overlayTrigger={
                  <Button variant='secondary'>Conheça o projeto</Button>
                }
              >
                {overlayData}
              </ProjectOverlay>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityPrize
