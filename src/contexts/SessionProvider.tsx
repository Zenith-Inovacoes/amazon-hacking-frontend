"use client"

import { ReactNode } from "react";
import { createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { putGenerateSession } from "@/services/apis/put-generate-session";

type GenerateSessionParams = {
    email: string,
    name: string
}

export type GenerateSessionContextDataProps = {
    isLoading: boolean
}

type GenerateSessionContextProviderProps = {
    children: ReactNode
}

export const GenerateSessionContext = createContext<GenerateSessionContextDataProps>({} as GenerateSessionContextDataProps)

export function GenerateSessionProvider({
    children
}: GenerateSessionContextProviderProps) {
    const { data: session, status } = useSession()

    const { mutateAsync, isPending: isLoading } = useMutation({
        mutationKey: ['generate-session'],
        mutationFn: async ({ email, name }: GenerateSessionParams) => {
            await putGenerateSession({ email, name })
        },
        retry: true
    })

    useEffect(() => {
        handleGenerateSession()

        async function handleGenerateSession() {
            if (
                status === 'authenticated' && session && session.user && session.user.email && session.user.name
            ) {
                await mutateAsync({
                    email: session.user.email,
                    name: session.user.name
                })
            }
        }
    }, [mutateAsync, session, status])

    return (
        <GenerateSessionContext.Provider value={{ isLoading }}>
            {children}
        </GenerateSessionContext.Provider>
    )
}