import { HTMLAttributes } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type EditionOverlayProps = {
  edition: '2022' | '2023',
  image: StaticImport | string
} & HTMLAttributes<HTMLDivElement>
