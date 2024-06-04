import { ProjectType } from "@/types/project"
import { StaticImageData } from "next/image"

export default interface ProjectCardProps extends ProjectType {}

export type ProjectOverlayChildrenProps = {
    solutionName: string
    teamLogo: StaticImageData | string
    altLogo: string
    solutionDescription: string
    teamMembers: string[]
  }