"use client"

import { Button } from "@/components/atoms"
import * as Dialog from "@radix-ui/react-dialog"
import { ReactNode, useEffect, useState } from "react"

export const Root = Dialog.Root
export const Portal = Dialog.Portal
export const Overlay = Dialog.Overlay

export const Content = ({children}: {children: ReactNode}) => {

    return(
        <Dialog.Content onInteractOutside={(e) => e.preventDefault()} className="justify-center items-center px-9 py-11 flex w-screen min-h-screen bg-black overflow-y-auto bg-opacity-60 md:p-[46px] md:text-18 lg:p-[114px] lg:text-20">{children}</Dialog.Content>
    )
}

export const Close = ({text}: {text: string}) => {
    const [buttonContent, setButtonContent] = useState<number | string>(5)

    useEffect(() => {
        if(typeof buttonContent === "string") return
        const timeOut = setTimeout(() => setButtonContent((currState) => Number(currState) !== 1 ? Number(currState) -1 : text), 1000)

        return () => clearTimeout(timeOut)
    }, [buttonContent])

    return(
        <Dialog.Close asChild>
            <Button disabled={typeof buttonContent !== "string"} className=" bg-secondary-400 disabled:opacity-60 disabled:pointer-events-none transition-all duration-300 hover:bg-[#7400D3] active:bg-[#16132D] min-w-[88px]">{buttonContent}</Button>
        </Dialog.Close>
    )
}