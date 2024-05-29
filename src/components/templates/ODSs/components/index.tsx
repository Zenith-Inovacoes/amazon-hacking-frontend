import Image from 'next/image'
import { ODSBoxProps } from './types'

export default function ODSBox({ image, url, odsName }: ODSBoxProps) {
    return (
        <a href={url} target='_blank' className='relative inline-block w-[82px] h-[82px]'>
            <Image src={image} alt={`Símbolo da ODS ${odsName}`} fill />
        </a>
    )
}
