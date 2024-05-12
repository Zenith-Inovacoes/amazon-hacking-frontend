import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ProjectOverlayChildrenProps = {
  solutionName: string
  teamLogo: StaticImageData | string
  altLogo: string
  solutionDescription: string
  teamMembers: string[]
}

export type ProjectOverlayProps = {
  children: ProjectOverlayChildrenProps
  videoURL: string
  videoTitle: string
  twitter: string
  whatsapp: string
  instagram: string
  facebook: string
  overlayTrigger: ReactNode
}
