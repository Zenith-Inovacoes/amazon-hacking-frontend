'use client'

import ProjectCardProps from './types'
import React from 'react';
import { cn } from '@/services/utils/className.utils'
import { useState } from 'react'
import LogoComputacaoAmostra from "public/icons/logo-computacao-amostra.svg"
import LogoDefault from 'public/DefaultLogoProjectCard.svg'
import { locales } from '@/services/utils/locale.utils'
import { usePathname } from 'next/navigation'
import Button from '../Button';
import ProjectOverlay from '@/components/organisms/ProjectOverlay';
import Image from 'next/image';

export default function ProjectCard({ ...props }: ProjectCardProps) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale ||
    'en'
  )

  const ytURL = locale === 'en' ? props.links.youtube.en : props.links.youtube.pt

  const childrenData = {
    solutionName: props.name,
    teamLogo: props.logoUrl || LogoComputacaoAmostra,
    solutionDescription:
      props.description,
    altLogo: `Logo da equipe ${props.name}`,
    teamMembers: props.team,
  }

  return (
    <div className='group p-3 gap-x-4 hover:p-6 rounded-xl justify-center items-center bg-white transition-all duration-500 flex xs:p-6 xs:hover:p-8 xs:gap-x-8 md:flex-col md:w-[232px] md:h-[233px] md:hover:h-[257px] md:items-center md:gap-y-4 lg:w-[270px] lg:h-[300px] lg:hover:h-[324px] lg:hover:w-[292px]'>
      <div className='relative w-[87px] h-[87px]'>
        <Image src={props.logoUrl || LogoDefault} alt={`Logo da equipe ${props.name}`} fill />
      </div>
      <div className='flex flex-col gap-y-6 items-center'>
        <span className='text-black text-16 font-bold md:text-18 lg:text-24'>{props.name}</span>
        <ProjectOverlay variant='current' videoURL={ytURL} overlayTrigger={<Button variant='primary' className='rounded-3xl text-nowrap'>{locale === 'en' ? 'Learn about' : 'Saiba Mais'} </Button>}>
          {childrenData}
        </ProjectOverlay>
      </div>
    </div>
  );
}
;
