import { UserType } from "./user"

export type IVote = {
    id: string,
    userId: UserType | UserType['id'],
    projectId: string,
    createdAt: Date
}