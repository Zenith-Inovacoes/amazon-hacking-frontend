'use client'

import { Slot } from '@radix-ui/react-slot'
import { forwardRef, Ref } from 'react'
import { ButtonProps } from './types'
import { cn } from '@/services/utils/className.utils'

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { asChild, className, children, variant = 'primary', ...rest } = props
    const theme = props.variant === 'icon' ? props.theme ?? 'light' : undefined
    const Component = asChild ? Slot : 'button'

    return (
        <Component
            ref={ref}
            className={cn(
                'transition-colors shrink-0 text-center flex justify-center items-center focus-visible:outline-none focus-visible:outline-offset-4 focus-visible:outline-primary-100 focus-visible:ouline-1',
                {
                    'rounded-lg p-4 hover:bg-primary-300 text-white font-bold text-base leading-4 bg-primary-100 active:bg-primary-400 ':
                        variant === 'primary',
                    'rounded-lg p-4 text-black bg-neutrals-100 font-bold text-base leading-4 hover:bg-neutrals-300 active:bg-neutrals-400':
                        variant === 'secondary',
                    'text-white p-4 font-normal text-base leading-4 hover:text-primary-100 active:text-primary-400 rounded-3xl':
                        variant === 'link',
                    'h-8 w-8 rounded-full text-2xl font-medium':
                        variant === 'icon',
                    'bg-neutrals-100 text-black hover:bg-neutrals-300 active:bg-neutrals-400':
                        variant === 'icon' && theme === 'light',
                    'bg-neutrals-700 text-white hover:bg-neutrals-600 active:bg-neutrals-500':
                        variant === 'icon' && theme === 'dark',
                },
                className
            )}
            {...rest}
        >
            {children}
        </Component>
    )
})

Button.displayName = 'Button'

export default Button
