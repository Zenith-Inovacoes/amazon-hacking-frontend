import { useEffect, useState } from "react"

export type CountingNumberOptions = {
    /**
     * Initial number of the animation
     * @type Number
     * @default 0
     */
    startNumber?: number
    /**
     * If animation will start slow
     * @type Boolean
     */
    slowStartAnimation?: boolean
    /**
     * If animation will end slow
     * @type Boolean
     */
    slowEndAnimation?: boolean
    /**
     * If animation will start paused
     * @type Boolean
     * @default false
     */
    defaultPaused?: boolean
    /**
     * Interval of the animation
     * @type Number
     * @default 20
     */
    interval?: number
}

export default function useCountingUpNumber(endNumber: number, options?: CountingNumberOptions) {
    const ACCELERATION_FACTOR = 1.05
    const INTERVAL = 20

    const [number, setNumber] = useState(options?.startNumber || 0)
    const [paused, setPaused] = useState(options?.defaultPaused || false)

    const [slowStart, setSlowStart] = useState(100)
    const [slowEnd, setSlowEnd] = useState(options?.interval ?? INTERVAL)

    function onAnimationPercentageGap(initial: number, end: number): boolean {
        return (number * 100) / endNumber >= initial && (number * 100) / endNumber <= end
    }

    function callSlowIntervalAndIncreaseSpeed() {
        const newInterval = slowStart < INTERVAL ? INTERVAL : slowStart / ACCELERATION_FACTOR
        setSlowStart(newInterval)

        setTimeout(() => {
            setNumber((prev) => prev + 1)
        }, newInterval)
    }

    function callSlowIntervalAndDecreaseSpeed() {
        const newInterval = slowEnd > 100 ? slowEnd : slowEnd * ACCELERATION_FACTOR
        setSlowEnd(newInterval)

        setTimeout(() => {
            setNumber((prev) => prev + 1)
        }, newInterval)
    }

    function start() {
        setPaused(false)
    }

    function pause() {
        setPaused(true)
    }

    useEffect(() => {
        if (paused) return
        if (number < endNumber) {
            if (onAnimationPercentageGap(0, 15) && options?.slowStartAnimation) {
                callSlowIntervalAndIncreaseSpeed()
            } else if (onAnimationPercentageGap(85, 100) && options?.slowEndAnimation) {
                callSlowIntervalAndDecreaseSpeed()
            } else {
                setTimeout(() => {
                    setNumber((prev) => prev + 1)
                }, options?.interval ?? INTERVAL)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number, paused])

    return {
        number,
        pause,
        start
    }
}