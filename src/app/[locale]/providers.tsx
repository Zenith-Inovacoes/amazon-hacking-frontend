"use client"

import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import { SessionProvider } from "next-auth/react"
import { GenerateSessionProvider } from "@/contexts/SessionProvider";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <GenerateSessionProvider>
          {children}
        </GenerateSessionProvider>
      </ReactQueryProvider>
    </SessionProvider>
    // <SessionProvider>
    //   {children}
    // </SessionProvider>
  )
}