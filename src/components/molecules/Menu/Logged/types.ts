import { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'

export type LoggedMenuProps = {
  image?: string | null
  name?: string | null
  email?: string | null
} & HTMLAttributes<HTMLDivElement>
