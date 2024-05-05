import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef, Ref } from 'react'
import { cn } from '@/services/utils/className.utils'
import { IoMdClose } from 'react-icons/io'
import { OverlayContentProps } from './types'

export const OverlayContent = forwardRef(
  (
    { className, theme = 'light', children, ...props }: OverlayContentProps,
    forwardedRef: Ref<HTMLDivElement>,
  ) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=closed]:animate-overlayHide z-50 fixed inset-0 overflow-y-auto bg-black/40 data-[state=open]:animate-overlayShow">
          <DialogPrimitive.Content
            {...props}
            className={cn(
              'data-[state=closed]:animate-dialogHide absolute left-1/2 top-20 mx-auto h-[200vh] w-[90vw] max-w-screen-xl -translate-x-1/2 rounded-t-[48px] bg-white data-[state=open]:animate-contentShow',
              className,
            )}
            ref={forwardedRef}
          >
            <div className="sticky left-0 top-0 flex h-fit w-full justify-end">
                {/* TO-DO: Replace this Close Button by the icon button variant of the Button component when it's in the develop branch */}
              {/* <DialogPrimitive.Close
                aria-label="close"
                className="m-10 flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-primary-100 text-white transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#F28F8F] active:bg-secondary-15"
              >
                <IoMdClose size={16} />
              </DialogPrimitive.Close> */}
            </div>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    )
  },
)

OverlayContent.displayName = 'OverlayContent'

export const OverlayTrigger = DialogPrimitive.Trigger
export const Overlay = DialogPrimitive.Root
