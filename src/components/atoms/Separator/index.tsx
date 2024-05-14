import { SeparatorProps } from "./types"
import { cn } from "@/services/utils/className.utils"
import { forwardRef, Ref } from "react"

const Separator = forwardRef(({ orientation = "horizontal", className, ...props }: SeparatorProps, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className={cn("bg-white inline-block", {
            "h-[1px] w-full": orientation === 'horizontal',
            "h-full w-[1px]": orientation === "vertical"
        }, className)} {...props} />
    )
})

Separator.displayName = "Separator"

export default Separator