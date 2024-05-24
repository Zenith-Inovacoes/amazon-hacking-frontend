import { useTranslations } from 'next-intl'
import LoadingImage from "public/images/loading.svg"
import Image from 'next/image'

export default function Loading() {
    const t = useTranslations('Loading')

    return (
        <div className='h-screen w-screen bg-black/50 grid place-items-center z-50 fixed top-0'>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <div className='relative w-24 h-24 animate-spin'>
                    <Image src={LoadingImage} alt='Imagem de plantas' fill />
                </div>
                <span className='text-20 text-white leading-6 font-bold text-center md:text-24 md:leading-7 lg:text-36 lg:leading-9'>
                    {t("title")}
                </span>
            </div>
        </div>
    )
}