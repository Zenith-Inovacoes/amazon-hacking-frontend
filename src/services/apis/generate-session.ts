import { api } from "../libs/axios";

type GenerateSessionRequest = {
    email: string,
    name: string
}

export async function generateSession({
    email,
    name
}: GenerateSessionRequest) {
    const response = await api.put(
        `users/generate_session?email=${email}&name=${name}`
    )

    return response
}