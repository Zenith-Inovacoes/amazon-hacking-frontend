import {
  SelectProps as SelectPrimitiveRootProps,
  SelectItemProps as SelectPrimitiveItemProps,
} from '@radix-ui/react-select'

export default interface SelectProps extends SelectPrimitiveRootProps {
  placeholder: string,
  variant?: "dark" | "light"
  className?: string
}

export interface SelectItemProps extends SelectPrimitiveItemProps { }
