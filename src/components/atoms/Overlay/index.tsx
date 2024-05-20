'use client'

import { PointerEvent, DragEvent, useLayoutEffect } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef, useRef, useState } from 'react'
import { cn } from '@/services/utils/className.utils'
import { IoMdClose } from 'react-icons/io'
import { OverlayContentProps } from './types'
import Button from '../Button'

export const OverlayContent = forwardRef(
  ({ className, theme = 'light', children, ...props }: OverlayContentProps) => {
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
        contentRef.current.style.transition = 'none'
      }
      setStartY(e.clientY)
      setIsDragging(true)
    }

    function release(
      e: PointerEvent<HTMLDivElement> | DragEvent<HTMLDivElement>
    ) {
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
        contentRef.current.style.transition = 'transform ease .3s'
        contentRef.current.style.transform = 'translateX(-50%) translateY(0)'
      }
    }

    function onPointerMove(
      e: PointerEvent<HTMLDivElement> | DragEvent<HTMLDivElement>
    ) {
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
        <DialogPrimitive.Overlay
          ref={overlayRef}
          onPointerUp={release}
          className='data-[state=closed]:animate-overlayHide z-50 fixed inset-0 overflow-y-auto bg-black/40 data-[state=open]:animate-overlayShow'
        >
          <DialogPrimitive.Content
            {...props}
            onDragEnd={release}
            onPointerDown={dragElement}
            onPointerUp={release}
            onPointerMove={onPointerMove}
            className={cn(
              'data-[state=closed]:animate-dialogHide absolute left-1/2 flex flex-col top-20 mx-auto min-h-[calc(100vh-80px)] w-[90vw] max-w-screen-xl -translate-x-1/2 rounded-t-[48px] bg-white data-[state=open]:animate-contentShow',
              windowWidth <= 1024 && 'active:cursor-grabbing',
              className
            )}
            ref={contentRef}
          >
            <div className='lg:hidden w-full cursor-grab active:cursor-grabbing py-8'>
              <div
                className={cn(
                  'mx-auto w-32 h-2 flex-shrink-0 rounded-full bg-white',
                  theme === 'dark' && 'bg-black'
                )}
              />
            </div>
            <div className='sticky left-0 top-0 flex h-fit w-full justify-end z-10'>
              <DialogPrimitive.Close
                ref={closeButtonRef}
                aria-label='close'
                asChild
                className='hidden lg:flex m-10'
              >
                <Button variant='icon' theme={theme}>
                  <IoMdClose size={16} />
                </Button>
              </DialogPrimitive.Close>
            </div>
            <div className='relative h-full flex-1'>{children}</div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    )
  }
)

OverlayContent.displayName = 'OverlayContent'

export const OverlayTrigger = DialogPrimitive.Trigger
export const Overlay = DialogPrimitive.Root
