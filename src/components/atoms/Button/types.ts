import { ButtonHTMLAttributes } from "react";

export type ButtonVariants = "primary" | "secondary" | "link" | "icon"

type ButtonIconProps = {
    variant: "icon"
    theme?: "light" | "dark"
}

export type ButtonProps = {
    /**
     * Merges its props onto its immediate child.
     */
    asChild?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> & (ButtonIconProps | {
    variant?: "primary" | "secondary" | "link"
})