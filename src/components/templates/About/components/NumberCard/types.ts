import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { HTMLAttributes, ReactNode } from "react";

export type NumberCardProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode
    number: number;
    image: StaticImport | string
    altImage: string,
}