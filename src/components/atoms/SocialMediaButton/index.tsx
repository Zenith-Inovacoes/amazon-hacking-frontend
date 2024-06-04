import { forwardRef, Ref } from "react"
import { SocialMediaButtonProps } from "./types"
import { cn } from "@/services/utils/className.utils"

const SocialMediaButton = forwardRef(({ className, children, variant = 'outline', ...props }: SocialMediaButtonProps, ref: Ref<HTMLAnchorElement>) => {
    return (
        <a className={cn("h-10 w-10 flex items-center justify-center relative hover:scale-110 active:opacity-80 duration-300 transition-transform focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-primary-100", variant === 'fill' ? "bg-white rounded-full" : "rounded-lg", className)} ref={ref} {...props} target="_blank" rel="noreferrer noopener">
            <div className={cn("flex justify-center items-center", variant === 'fill' && "h-6 w-6")}>
                {children}
            </div>
        </a>
    )
})

SocialMediaButton.displayName = "SocialMediaButton"

export default SocialMediaButton