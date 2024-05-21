import { IVote } from "./IVote";

export type IUser = {
    id: string,
    email: string,
    name: string,
    voteCount: number,
    votes: string[] | IVote[]
    createdAt: Date
}