import { TermsCardProps } from "./types"
import Separator from "@/components/atoms/Separator"
import { cn } from "@/services/utils/className.utils"

export default function TermsCard({ title, children, className, ...props }: TermsCardProps) {
    return (
        <div className={cn("flex flex-col items-start justify-center gap-6", className)} {...props}>
            <span className="text-white text-left font-bold text-20 leading-5 lg:text-24">{title}</span>
            <Separator className="h-[2px]" orientation="horizontal" />
            <p className="text-white text-left font-normal text-16 leading-4 md:text-18 lg:text-20 lg:leading-5">{children}</p>
        </div>
    )
}