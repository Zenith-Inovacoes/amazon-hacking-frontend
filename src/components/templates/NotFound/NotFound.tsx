import Image from 'next/image'
import NotFoundImage from 'public/404Image.svg'
import Button from '@/components/atoms/Button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <div className='px-5 flex flex-col items-center gap-y-9 h-fit'>
                <h2 className='text-black text-center font-bold text-40 lg:text-60'>A Página não foi encontrada</h2>
                <p className='text-neutral-500 text-center text-16'>Parece que a página que você estava procurando não existe ou talvez você tenha digitado o endereço errado.</p>
                <Button className='w-fit' variant='primary'>Voltar para a página inicial</Button>
            </div>
            <div className='relative mb-3 h-[150px] w-[300px] max-w-[349px] max-h-[233px]'>
                <Image src={NotFoundImage} alt='Imagem que contém pessoas carregando o número 404' fill />
            </div>
            <div className='bg-repeat bg-404Decorator w-full h-[87px]'/>
        </div>
    )
}