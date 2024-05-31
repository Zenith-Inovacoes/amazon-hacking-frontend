import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { AnchorHTMLAttributes } from "react"

export default interface ODSBoxProps extends  AnchorHTMLAttributes<HTMLAnchorElement> {
  image: StaticImport | string
  url: string
  odsName: string
} 