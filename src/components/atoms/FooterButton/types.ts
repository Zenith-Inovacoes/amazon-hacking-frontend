import { ButtonHTMLAttributes } from "react";

export default interface FooterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}