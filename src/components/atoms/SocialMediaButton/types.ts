import { AnchorHTMLAttributes } from "react";

export interface SocialMediaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "outline" | "fill"
}