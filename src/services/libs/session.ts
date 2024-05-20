import { User, getServerSession } from "next-auth"
import { putGenerateSession } from "../apis/put-generate-session"

export const session = async ({ session, token }: any) => {
    session.user.id = token.id
    return session
}

export const getUserSession = async (): Promise<User> => {
    const authUserSession = await getServerSession({
        callbacks: {
            session,
        },
    })

    if (!authUserSession) throw new Error("Unauthorized")

    await putGenerateSession({
        email: authUserSession.user.email,
        name: authUserSession.user.name,
    }).catch((error) => {
        throw new Error(error.response.data.message)
    })

    return authUserSession.user
}