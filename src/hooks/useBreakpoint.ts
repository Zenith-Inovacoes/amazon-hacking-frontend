"use client"

import { useEffect, useState } from 'react'

type BreakpointType = {
  xl: number
  lg: number
  md: number
  sm: number
}

const breakpoints: BreakpointType = {
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const bp = Object.keys(breakpoints).find(
        // @ts-ignore
        (key) => width >= breakpoints[key],
      )
      // @ts-ignore
      setBreakpoint(bp)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return breakpoint
}
