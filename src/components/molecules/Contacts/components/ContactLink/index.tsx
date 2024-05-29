import { ContactLinkProps } from "./types"
import { cn } from "@/services/utils/className.utils"

export default function ContactLink({ children, label, icon: Icon, className, ...props }: ContactLinkProps) {
    return (
        <div className="flex flex-col flex-1 items-start justify-center gap-4 lg:gap-6">
            <span className="font-bold text-16 leading-4 text-black ">{label}</span>
            <a className={cn("flex text-black font-normal text-xs leading-5 items-center justify-center transition-all w-fit gap-3 hover:opacity-80 active:scale-95", className)} {...props}>
                <Icon size={32} />
                {children}
            </a>
        </div>
    )
}