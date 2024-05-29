import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type ODSBoxProps = {
  image: StaticImport | string
  url: string
  odsName: string
}