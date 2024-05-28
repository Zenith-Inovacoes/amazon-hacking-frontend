import { IVote } from "./IVote";

export type IProject = {
    id: string,
    name: string,
    team: string[],
    description: string,
    status?: boolean
    links: {
        github: string,
        youtube: {
            en: string,
            pt: string
        },
        banner?: string
    },
    course: CourseEnum,
    logoUrl?: string,
    year?: number
}

export enum CourseEnum {
    BCC = 'bcc',
    ECOMP = 'ecomp'
}