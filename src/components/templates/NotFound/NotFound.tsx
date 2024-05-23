import Image from 'next/image'
import NotFoundImage from 'public/404Image.svg'
import Button from '@/components/atoms/Button'

export default function NotFound() {
  return (
    <div className='flex bg-white min-h-screen w-full flex-col items-center justify-center py-40 md:py-48 lg:py-36'>
      <div className='max-[370px]:px-5 px-11 md:px-20 max-w-5xl flex flex-col items-center gap-y-9 h-fit'>
        <h2 className='text-black text-center font-bold text-40 leading-10 md:text-50 lg:text-60'>
          A Página não foi encontrada
        </h2>
        <p className='text-neutral-500 text-center max-[370px]:text-clip text-16 md:text-18'>
          A página solicitada não pôde ser encontrada. Verifique se o endereço
          foi digitado corretamente ou retorne à página inicial para continuar
          navegando.
        </p>
        <Button className='w-fit' asChild variant='primary'>
          <a href='/'>Voltar para a página inicial</a>
        </Button>
      </div>
      <div className='relative mb-3 max-[370px]:h-[150px] max-[370px]:w-[300px] w-[349px] h-[233px] md:w-[730px] md:h-[454px] lg:w-[824px] lg:h-[476px]'>
        <Image
          src={NotFoundImage}
          alt='Imagem que contém pessoas carregando o número 404'
          fill
        />
      </div>
      <div className='bg-repeat bg-404Decorator w-full h-[87px]' />
    </div>
  )
}
