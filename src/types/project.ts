import { IVote } from "./IVote";

export type ProjectType = {
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
    /* 
    *   PROPRIEDADE NAO EXISTE NO BACKEND 
    */
    logoUrl?: string,
    course?: CourseEnum,
    year?: number
}

export enum CourseEnum {
    BCC = 'bcc',
    ECOMP = 'ecomp'
}