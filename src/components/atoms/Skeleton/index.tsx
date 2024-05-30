import { cn } from '@/services/utils/className.utils'
import { SkeletonProps } from './types'

const Skeleton = ({ children, className, ...props }: SkeletonProps) => {
    return (
        <div
            className={cn(
                'bg-white w-96 h-44 max-w-full rounded-2xl animate-skeleton',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Skeleton
