import CheckboxProps from "./types"
import { Ref, forwardRef } from "react"
import { cn } from "@/services/utils/className.utils"

const Checkbox = forwardRef(({children, className, ...props}: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    return (
        <label className={cn("rounded-[10px] bg-white border relative cursor-pointer border-black font-bold py-3 px-6 leading-4 text-base transition-colors text-black hover:bg-neutrals-500 hover:border-neutrals-500 hover:text-white has-[:focus-visible]:outline-none has-[:focus-visible]:outline has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-primary-100 has-[:checked]:bg-primary-100 has-[:checked]:border-primary-100 has-[:checked]:text-white has-[:checked]:hover:bg-primary-300", className)}>
            {children}
            <input type="checkbox" className="absolute select-none opacity-0 inset-0 z-[-1]" ref={ref} {...props}/>
        </label>
    )
})

Checkbox.displayName = "Checkbox"

export default Checkbox