import axios from "axios"
import { env } from "./env.mjs"

export const api = axios.create({
    baseURL: env.API_URL,
    withCredentials: true,
    headers: {
        "api": env.API_KEY,
    },
})