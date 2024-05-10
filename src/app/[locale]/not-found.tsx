import Link from 'next/link'
import deco from 'public/404Decorator.svg'

export default function NotFound() {
  return (
    <div className='w-[100vw] h-[100vh] bg-white'>
      <h2 className='text-black text-60'>A Página não foi encontrada</h2>
      <p className='text-black'>Parece que a página que você estava procurando não existe ou talvez você tenha digitado o endereço errado.</p>
      <div className="bg-repeat bg-[url('public/404Decorator.svg')]"/>
    </div>
  )
}
{/* <div className="absolute inset-0 bg-[url('public/images/StarsOverlayMB.svg')]" /> */}