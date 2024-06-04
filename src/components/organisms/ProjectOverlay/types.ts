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
  id: string
  children: ProjectOverlayChildrenProps
  videoURL: string
  videoTitle?: string
  variant?: 'current' | 'past'
  overlayTrigger: ReactNode
}
