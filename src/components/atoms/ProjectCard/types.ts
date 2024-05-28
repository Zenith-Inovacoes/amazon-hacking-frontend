import { IProject } from "@/types/IProject"
import { StaticImageData } from "next/image"

export default interface ProjectCardProps extends IProject {}

export type ProjectOverlayChildrenProps = {
    solutionName: string
    teamLogo: StaticImageData | string
    altLogo: string
    solutionDescription: string
    teamMembers: string[]
  }