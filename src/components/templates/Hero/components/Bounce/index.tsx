"use client"

import { BounceButton } from "@/components/atoms";

export default function Bounce({text}: {text: string}) {
    return (
        <div className="w-full flex justify-center items-center absolute -bottom-4 z-10 md:-bottom-0 lg:-bottom-5 xl:bottom-4 2xl:bottom-28 translate-y-full">
            <BounceButton className="text-black">
                {text}
            </BounceButton>
        </div>
    )
}