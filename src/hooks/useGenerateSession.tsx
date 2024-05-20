import { useContext } from "react";
import { GenerateSessionContext } from "@/contexts/SessionProvider";

export default function useGenerateSession() {
    const context = useContext(GenerateSessionContext)

    if(!context) {
        throw new Error('useGenerateSession must be used within a GenerateSessionProvider')
    }

    return context
}