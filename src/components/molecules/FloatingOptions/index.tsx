"use client"

import { FloatingButton } from "@/components/atoms";
import {LanguageSwitcher} from "@/components/atoms";

export default function FloatingOptions() {
    return (
        <div className="fixed w-full bottom-10 right-10 flex flex-col justify-center items-end gap-6">
            <LanguageSwitcher />
            <FloatingButton href="https://zenithinova.com.br" />
        </div>
    )
}