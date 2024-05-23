import LinkProps from './types'
import { cn } from '@/services/utils/className.utils'
import { forwardRef, Ref } from 'react'

import { IoOpenOutline } from 'react-icons/io5'

const Link = forwardRef(
  (
    { className, children, target, ...props }: LinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const hasTargetBlank = target === '_blank'

    return (
      <a
        ref={ref}
        className={cn(
          'group w-fit h-8 inline-flex gap-x-1 justify-center cursor-pointer focus-visible:outline-none',
          className
        )}
        target={target}
        {...props}
      >
        <span className='group-hover:border-b-[1px] text-20 group-focus-visible:border-b-[1px] border-white'>
          {children}
        </span>
        <IoOpenOutline
          size={27}
          className={cn('my-auto', hasTargetBlank ? '' : 'hidden')}
        />
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
