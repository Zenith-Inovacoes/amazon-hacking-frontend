import { BadgeProps } from './types'
import { cn } from '@/services/utils/className.utils'

const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-[52px] text-black w-fit h-fit text-center items-center flex-shrink-0 flex text-xs tracking-[0.144px] justify-center font-bold px-1 py-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge
