import { cn } from '@/services/utils/className.utils'
import Image from 'next/image'
import { ODSBoxProps } from './types'

export default function ODSBox({ image, url, odsName, classname, ...props }: ODSBoxProps) {
    return (
        <a href={url} target='_blank' className={cn('relative inline-block w-full max-w-[92px] h-[92px] lg:w-[126px] lg:h-[126px] hover:scale-105 duration-200 transition-all', classname)}>
            <Image src={image} alt={`Símbolo da ODS ${odsName}`} fill />
        </a>
    )
}
