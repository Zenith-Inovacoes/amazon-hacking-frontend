'use client'

import { LogoButton } from '@/components/atoms'
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import { useScroll } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { scrollTo } from '@/services/utils/scrollTo'
import { usePathname, useRouter } from 'next/navigation'

const HeaderLogic = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const pathname = usePathname()
    const isInSolutions = pathname.includes('solutions')

    const { open } = useMenu()
    const { scrollY } = useScroll()
    const [isDown, setIsDown] = useState<boolean>(!!isInSolutions)

    const { setOpen } = useMenu()

    useEffect(() => {
        if (isInSolutions) {
            setIsDown(true)
            return;
        }

        const interval = setInterval(() => {
            const scrollYValue = window.scrollY

            if (!isDown && scrollYValue >= 60) setIsDown(true)
            else if (isDown && scrollYValue < 60) setIsDown(false)
        }, 100)

        return () => clearInterval(interval)
    }, [isDown, isInSolutions, scrollY])

    return (
        <header
            className={cn(
                'fixed w-full h-fit top-0 flex justify-center items-start transition-colors duration-500 rounded-b-[30px] z-40',
                isDown && 'bg-black'
            )}
        >
            <div className='relative flex w-full h-fit flex-row items-center justify-between max-w-screen-2xl'>
                <div
                    onClick={() => {
                        if (isInSolutions) {
                            router.push('/')
                            return;
                        }
                        scrollTo('hero')
                    }}
                    onMouseEnter={() => {
                        if (isInSolutions) router.prefetch('/')
                    }}
                    onTouchStart={() => {
                        if (isInSolutions) router.prefetch('/')
                    }}
                    className={cn(
                        'pl-4 xs:pl-[42px] md:pl-[62px] duration-200 transition-opacity sm:-mx-6 scale-[0.532] sm:scale-100 origin-left',
                        open && 'opacity-0 lg:opacity-100'
                    )}
                >
                    <LogoButton
                        variant={isDown ? 'secondary' : 'primary'}
                        onClick={() => {
                            if (isInSolutions) {
                                router.push('/')
                                return;
                            }
                            scrollTo('hero')
                        }}
                        onMouseEnter={() => {
                            if (isInSolutions) router.prefetch('/')
                        }}
                        onTouchStart={() => {
                            if (isInSolutions) router.prefetch('/')
                        }}
                    />
                </div>
                {children}
            </div>
        </header>
    )
}

export default HeaderLogic
