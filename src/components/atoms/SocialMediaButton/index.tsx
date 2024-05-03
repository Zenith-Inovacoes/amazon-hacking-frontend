import { forwardRef, Ref } from "react"
import { SocialMediaButtonProps } from "./types"
import { cn } from "@/services/utils/className.utils"

const SocialMediaButton = forwardRef(({ className, children, ...props }: SocialMediaButtonProps, ref: Ref<HTMLAnchorElement>) => {
    return (
        <a className={cn("h-10 w-10 flex items-center justify-center relative hover:scale-110 active:opacity-80 duration-300 transition-transform rounded-lg focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-primary-100", className)} ref={ref} {...props}>
            {children}
        </a>
    )
})

SocialMediaButton.displayName = "SocialMediaButton"

export default SocialMediaButton