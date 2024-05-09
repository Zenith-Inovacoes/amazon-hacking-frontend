
import FloatingButtonProps from "./types"
import { cn } from "@/services/utils/className.utils"
import LogoComputacaoAmostra from "public/icons/logo-computacao-amostra.svg"
import Image from "next/image"
import { forwardRef, Ref } from "react"

const FloatingButton = forwardRef(({className, ...props}: FloatingButtonProps, ref: Ref<HTMLAnchorElement>) => {

    return (
        <a ref={ref} className={cn("h-14 w-14 rounded-full shadow-floatingButton transition-colors bg-black flex items-center justify-center focus-amazon-hacking hover:bg-primary-100 active:bg-primary-400", className)} {...props}>
            <Image src={LogoComputacaoAmostra} alt="Logo da Computação Amostra" height={32} width={32}/>
        </a>
    )
})

FloatingButton.displayName = "FloatingButton"

export default FloatingButton