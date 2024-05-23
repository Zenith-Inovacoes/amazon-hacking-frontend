"use client"

import Image from "next/image"
import { GoalCardProps } from "./types"
import { cn } from "@/services/utils/className.utils"
import { forwardRef, Ref } from "react"
import { motion } from "framer-motion"
import { title } from "process"

const GoalCard = forwardRef(({ title, children, image, altImage, className, ...props }: GoalCardProps, ref: Ref<HTMLDivElement>) => {
    return (
        <motion.div ref={ref} className={cn("px-6 bg-neutrals-100 flex-shrink-0 h-auto w-full max-w-80 py-12 rounded-[28px] flex gap-[20px] flex-col justify-center items-center text-center lg:py-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:max-w-screen-sm lg:h-full lg:place-items-start", className)} {...props}>
            <span className="text-black font-bold leading-8 text-24 text-balance lg:self-start lg:text-left">{title}</span>
            <div className="relative w-52 h-44 lg:aspect-square lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
                <Image src={image} alt={altImage} fill />
            </div>
            <div className="text-black text-16 font-normal leading-5 md:text-18 lg:text-left">
                {children}
            </div>
        </motion.div>
    )
})

GoalCard.displayName = "GoalCard"

export default GoalCard