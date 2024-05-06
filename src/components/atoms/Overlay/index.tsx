"use client"

import { PointerEvent, DragEvent, useLayoutEffect } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef, Ref, useRef, useState } from 'react'
import { cn } from '@/services/utils/className.utils'
import { IoMdClose } from 'react-icons/io'
import { OverlayContentProps } from './types'

export const OverlayContent = forwardRef(
  (
    { className, theme = 'light', children, ...props }: OverlayContentProps
  ) => {
    const [isDragging, setIsDragging] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const [windowWidth, setWindowWidth] = useState(0)
    const [startY, setStartY] = useState(0)

    function dragElement(e: PointerEvent<HTMLDivElement>) {
      if (windowWidth > 1024) return
      if (overlayRef.current) {
        if (overlayRef.current.scrollTop > 100) return
      }
      if (contentRef.current) {
        contentRef.current.style.transition = "none"
      }
      setStartY(e.clientY)
      setIsDragging(true)
    }

    function release(e: PointerEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) {
      if (windowWidth > 1024) return
      e.stopPropagation()
      const diff = startY - e.clientY
      if (overlayRef.current) {
        if (diff < -80 && overlayRef.current?.scrollTop <= 100) {
          setIsDragging(false)
          closeButtonRef.current?.click()
          return
        }
      }
      if (contentRef.current) {
        setIsDragging(false)
        contentRef.current.style.transition = "transform ease .3s"
        contentRef.current.style.transform = 'translateX(-50%) translateY(0)'
      }
    }

    function onPointerMove(e: PointerEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) {
      if (windowWidth > 1024) return
      if (isDragging && contentRef.current) {
        const diff = startY - e.clientY
        if (diff >= 20) return
        contentRef.current.style.transform = `translateX(-50%) translateY(${-diff}px)`
      }
    }

    useLayoutEffect(() => {
      setWindowWidth(window.innerWidth)
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay ref={overlayRef} onPointerUp={release} className="data-[state=closed]:animate-overlayHide z-50 fixed inset-0 overflow-y-auto bg-black/40 data-[state=open]:animate-overlayShow">
          <DialogPrimitive.Content
            {...props}
            onDragEnd={release}
            onPointerDown={dragElement}
            onPointerUp={release}
            onPointerMove={onPointerMove}
            className={cn(
              'data-[state=closed]:animate-dialogHide absolute left-1/2 flex flex-col top-20 mx-auto min-h-[calc(100vh-80px)] w-[90vw] max-w-screen-xl -translate-x-1/2 rounded-t-[48px] bg-white data-[state=open]:animate-contentShow',
              windowWidth <= 1024 && "active:cursor-grabbing",
              className,
            )}
            ref={contentRef}
          >
            <div className='lg:hidden w-full cursor-grab active:cursor-grabbing py-8'>
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
            </div>
            <div className="sticky left-0 top-0 flex h-fit w-full justify-end">
              {/* TO-DO: Replace this Close Button by the icon button variant of the Button component when it's in the develop branch */}
              <DialogPrimitive.Close
                ref={closeButtonRef}
                aria-label="close"
                className="hidden lg:flex m-10 h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-primary-100 text-white transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#F28F8F] active:bg-secondary-15"
              >
                <IoMdClose size={16} />
              </DialogPrimitive.Close>
            </div>
            <div className='relative h-full flex-1'>
              {children}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    )
  },
)

OverlayContent.displayName = 'OverlayContent'

export const OverlayTrigger = DialogPrimitive.Trigger
export const Overlay = DialogPrimitive.Root
