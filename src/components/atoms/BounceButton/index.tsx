import { RiArrowDownSFill } from "react-icons/ri";
import BounceButtonProps from "./types";
import { forwardRef, Ref } from "react";
import { cn } from "@/services/utils/className.utils";

const BounceButton = forwardRef(({className, children, ...props}: BounceButtonProps, ref: Ref<HTMLButtonElement>) => {

    return (
        <button className={cn("flex flex-col items-center animate-bounce lg:text-24 focus-amazon-hacking text-18 font-medium leading-4 rounded-xl p-2 text-white hover:text-neutrals-300 transition-colors", className)} ref={ref} {...props}>
            <span>{children}</span>
            <RiArrowDownSFill className="animate-bounce size-7 lg:size-10"/>
        </button>
    )
})

BounceButton.displayName = "BounceButton"

export default BounceButton