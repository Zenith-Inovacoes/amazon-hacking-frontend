'use client'

import { cn } from '@/services/utils/className.utils'
import { WinnerCardProps } from './types'
import { Button } from '@/components/atoms'
import Image from 'next/image'

import FirstPlaceWinner from 'public/images/FirstPlaceWinner.svg'
import SecondPlaceWinner from 'public/images/SecondPlaceWinner.svg'
import ThirdPlaceWinner from 'public/images/ThirdPlaceWinner.svg'
import ProjectOverlay from '@/components/organisms/ProjectOverlay'
import { ProjectOverlayChildrenProps } from '@/components/organisms/ProjectOverlay/types'

const WinnerCard = ({
  children,
  currentYear,
  idx,
  ...props
}: WinnerCardProps) => {
  const overlayData: ProjectOverlayChildrenProps = {
    solutionName: 'Zenith Inova',
    altLogo: 'Logo Zenith Inova',
    solutionDescription:
      'ksjkdfhkshdfjkhskdjhfksjdhfksjhdfkjshdkfhskdjhfksjdhfkjshdfkjshdkjfhskdjhfksjdhfkjshdkfjhskdjhfksjdhfksjdhfkjshdfkjshdfjkshdfkjhsdkfjhskdjfhskjdhfksjdhfkjshdfkjsdhfkjshdfkjshdfkjhsdkjfhskdjhfsdhjkf',
    teamLogo: '',
    teamMembers: [
      'Gabriel Marcelino',
      'Matheus Dourado',
      'Marco Pierozan',
      'Renan Andrew',
      'Rian Ernesto',
    ],
    overlayTrigger: <Button className='z-10'>Conheça a Solução</Button>,
  }

  return (
    <div
      className={cn(
        'relative flex flex-col w-[237px] h-[310px] flex-shrink-0 bg-white rounded-[35px] items-center justify-between gap-[10px] px-6 py-6 overflow-hidden before:absolute before:bg-gradient-to-b before:inset-0 before:to-[60%] after:absolute after:inset-[1px] after:bg-white after:rounded-[35px]',
        idx === 0 && 'before:from-[#FFFF00]',
        idx === 1 && 'before:from-[#263238]',
        idx === 2 && 'before:from-[#CD7F32]'
      )}
      {...props}
    >
      <div className='flex flex-col gap-[10px] z-10'>
        <Image
          src={FirstPlaceWinner}
          alt='First Place Trophy'
          className={cn(idx !== 0 && 'hidden')}
        />
        <Image
          src={SecondPlaceWinner}
          alt='Second Place Trophy'
          className={cn(idx !== 1 && 'hidden')}
        />
        <Image
          src={ThirdPlaceWinner}
          alt='Third Place Trophy'
          className={cn(idx !== 2 && 'hidden')}
        />
        <span className='text-black text-18 font-medium tracking-[0.216px] text-center z-10'>
          {idx === 0 ? '1° Lugar' : idx === 1 ? '2° Lugar' : '3° Lugar'}
        </span>
      </div>
      <div className='relative flex items-center justify-center text-black'>
        <h1
          className={cn(
            'absolute font-bold text-36 leading-[1.1] text-center z-10 transition-opacity duration-300',
            !currentYear[0] && 'pointer-events-none opacity-0'
          )}
        >
          {children[0]}
        </h1>
        <h1
          className={cn(
            'absolute font-bold text-36 leading-[1.1] text-center z-10 transition-opacity duration-300',
            !currentYear[1] && 'pointer-events-none opacity-0'
          )}
        >
          {children[1]}
        </h1>
      </div>
      <ProjectOverlay
        variant='past'
        videoURL='https://www.youtube.com/embed/fPYSh680ZBY'
        videoTitle='What Your GitHub Says About You | LIVE from Brazil'
        twitter='https://twitter.com/'
        whatsapp='https://web.whatsapp.com/'
        instagram='https://www.instagram.com/'
        facebook='https://www.facebook.com/'
      >
        {overlayData}
      </ProjectOverlay>
    </div>
  )
}

export default WinnerCard
