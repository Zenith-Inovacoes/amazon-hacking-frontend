import { IVote } from "./IVote";

export type UserType = {
    id: string,
    email: string,
    name: string,
    voteCount: number,
    votes: string[] | IVote[]
    createdAt: Date
}