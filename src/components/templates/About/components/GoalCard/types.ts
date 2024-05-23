import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { HTMLAttributes, ReactNode } from "react";
import {MotionProps} from "framer-motion"

export  type GoalCardProps = HTMLAttributes<HTMLDivElement> & MotionProps & {
    title: ReactNode,
    image: StaticImport | string
    altImage: string
}