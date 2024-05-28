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
    <div className='bg-white flex'>
      <div className='w-[87px] h-[87px] rounded-[50%]'>
        <Image src={props.logoUrl || LogoComputacaoAmostra} alt={`Logo da equipe ${props.name}`} fill />
      </div>
      <div>
        <span>{props.name}</span>
        <ProjectOverlay variant='current' videoURL={ytURL} overlayTrigger={<Button>Conheça mais...</Button>}>
          {childrenData}
        </ProjectOverlay>
      </div>
    </div>
  );
}
;
