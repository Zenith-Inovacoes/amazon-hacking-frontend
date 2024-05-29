import { AnchorHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon: IconType,
    label: ReactNode
}