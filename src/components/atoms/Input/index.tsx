import { HTMLAttributes } from 'react'
import { IoIosSearch } from 'react-icons/io'

const Input = ({ ...props }: HTMLAttributes<HTMLInputElement>) => {
    return (
        <div className='flex justify-center items-center w-[300px] gap-6 p-[10px] border-b border-b-white'>
            <input
                type='text'
                className='placeholder:text-white text-white bg-transparent w-full outline-none text-base tracking-[0.192px]'
                {...props}
            />
            <IoIosSearch size={22} className='text-white' />
        </div>
    )
}

export default Input
