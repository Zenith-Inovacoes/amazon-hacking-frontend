'use client'

import ProjectCardProps from './types'
import React from 'react';
import { cn } from '@/services/utils/className.utils'
import { useState } from 'react'
import LogoComputacaoAmostra from "public/icons/logo-computacao-amostra.svg"
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
    <div className='bg-white flex w-[300px] p-6 rounded-xl justify-center gap-x-8 hover:p-8 transition-all duration-500'>
      <div className='w-[87px] h-[87px] flex justify-center items-center rounded-[50%] bg-black'>
        <div className='relative w-14 h-14'>
          <Image src={props.logoUrl || LogoComputacaoAmostra} alt={`Logo da equipe ${props.name}`} fill />
        </div>
      </div>
      <div className='flex flex-col gap-y-6 items-center'>
        <span className='text-black text-16 font-bold'>{props.name}</span>
        <ProjectOverlay variant='current' videoURL={ytURL} overlayTrigger={<Button variant='primary' className='rounded-3xl px-3 py-2'>Conheça mais...</Button>}>
          {childrenData}
        </ProjectOverlay>
      </div>
    </div>
  );
}
;
