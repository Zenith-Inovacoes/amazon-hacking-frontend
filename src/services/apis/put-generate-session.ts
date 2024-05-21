import { api } from "../libs/axios";

type putGenerateSessionType = {
    email: string,
    name: string
}

export async function putGenerateSession({
    email,
    name
}: putGenerateSessionType) {
    const { data } = await api.put(
        `users/generate_session?email=${email}&name=${name}`
    )

    return data
}