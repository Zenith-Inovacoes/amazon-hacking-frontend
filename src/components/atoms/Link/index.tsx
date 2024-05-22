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
      <a ref={ref} className={cn("group w-fit inline-flex gap-x-1 justify-center  focus-visible:outline-none text-20", className)} {...props}>
        <span className="group-hover:underline text-inherit group-focus-visible:underline border-white">
          {children}
        </span>
        <IoOpenOutline size={27} className={cn("my-auto", hasTargetBlank ? "" : "hidden")} />
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
