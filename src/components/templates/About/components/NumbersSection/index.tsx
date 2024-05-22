"use client"

import React, { ReactNode, useEffect, useRef } from "react"

export default function NumbersSection({ children }: { children: ReactNode }) {
    const aboutNumbersRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        aboutNumbersRef.current!.style.position = "static"
        let offsetTop = aboutNumbersRef.current!.offsetTop
        aboutNumbersRef.current!.style.position = "sticky"

        window.addEventListener("resize", () => {
            aboutNumbersRef.current!.style.position = "static"
            offsetTop = aboutNumbersRef.current!.offsetTop
            aboutNumbersRef.current!.style.position = "sticky"
        })

        function scroll() {
            const elementHeight = aboutNumbersRef.current!.offsetHeight
            const windowHeight = window.innerHeight
            const spaceLeft = elementHeight - windowHeight
            const diff = offsetTop - window.scrollY

            if (diff < 0) {
                if (Math.abs(diff) >= spaceLeft) {
                    aboutNumbersRef.current!.style.top = `-${spaceLeft}px`
                } else {
                    aboutNumbersRef.current!.style.top = `${diff}px`
                }
            }
        }

        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("resize", () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                offsetTop = aboutNumbersRef.current!.offsetTop
            })
            window.removeEventListener("scroll", scroll)
        }
    }, [aboutNumbersRef])

    return (
        <div ref={aboutNumbersRef} className="bg-primary-100 sticky top-0 w-full pt-8 2xl:pt-0 after:absolute after:w-full after:h-1 after:bg-black after:bottom-[-2px] before:absolute before:w-full before:h-1 before:bg-primary-100 before:top-[-2px]">
            {children}
        </div>
    )
} 