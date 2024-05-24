import { HTMLAttributes } from 'react'

export type WinnerCardProps = {
  children: string[]
  currentYear: boolean[]
  idx: number
  course: 'eng' | 'sci'
} & HTMLAttributes<HTMLDivElement>
