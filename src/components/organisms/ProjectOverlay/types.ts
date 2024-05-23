import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ProjectOverlayChildrenProps = {
  solutionName: string
  teamLogo: StaticImageData | string
  altLogo: string
  solutionDescription: string
  teamMembers: string[]
  overlayTrigger: ReactNode
}

export type ProjectOverlayProps = {
  children: ProjectOverlayChildrenProps
  videoURL: string
  videoTitle?: string
  variant?: 'current' | 'past'
}
