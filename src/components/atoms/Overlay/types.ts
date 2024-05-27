import { DialogContentProps } from "@radix-ui/react-dialog";

export interface OverlayContentProps extends DialogContentProps {
    theme?: "light" | "dark",
    handlerColor?: string
}