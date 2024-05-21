import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { HTMLAttributes, ReactNode } from "react";
import { CountingNumberOptions } from "@/hooks/useCountingUpNumber";

export type NumberCardProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode
    number: number;
    image: StaticImport | string
    altImage: string,
    /**
     * The Number isn't the right number, but it's near it
     */
    isMarginNumber?: boolean
} & CountingNumberOptions