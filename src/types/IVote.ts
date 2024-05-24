import { IUser } from "./IUser"

export type IVote = {
    id: string,
    userId: IUser | IUser['id'],
    projectId: string,
    createdAt: Date
}