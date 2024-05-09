import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/services/utils/className.utils"
import { forwardRef, Ref } from "react"
import FooterButtonProps from "./types"

const FooterButton = forwardRef(({className, asChild, children, ...props}: FooterButtonProps, ref: Ref<HTMLButtonElement>) => {
    const Component = asChild ? Slot : "button"

    return (
        <Component ref={ref} className={cn("text-white px-2 py-1 text-24 font-normal leading-6 hover:text-primary-400 transition-colors active:text-black focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-4 rounded-lg focus-visible:outline-black", className)} {...props}>
            {children}
        </Component>
    )
})

FooterButton.displayName = "FooterButton"

export default FooterButton