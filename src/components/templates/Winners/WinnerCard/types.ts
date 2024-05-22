import { HTMLAttributes } from 'react'

export type WinnerCardProps = {
  children: string[]
  currentYear: boolean[]
  idx: number
} & HTMLAttributes<HTMLDivElement>
