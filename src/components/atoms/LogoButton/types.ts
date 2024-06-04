import { ButtonHTMLAttributes } from "react";

export default interface LogoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}