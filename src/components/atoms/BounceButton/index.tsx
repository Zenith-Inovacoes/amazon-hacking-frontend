import { RiArrowDownSFill } from "react-icons/ri";
import BounceButtonProps from "./types";
import { cn } from "@/services/utils/className.utils";

export default function BounceButton({className, children, ...props}: BounceButtonProps)  {

    return (
        <a href="#about" className={cn("flex flex-col items-center animate-bounce lg:text-24 focus-amazon-hacking text-18 font-medium leading-4 rounded-xl p-2 text-white hover:text-neutrals-300 transition-colors", className)} {...props}>
            <span>{children}</span>
            <RiArrowDownSFill className="animate-bounce size-7 lg:size-10"/>
        </a>
    )
}