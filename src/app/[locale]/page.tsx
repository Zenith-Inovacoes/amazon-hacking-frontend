import About from '@/components/templates/About'
import Zenith from '@/components/templates/Zenith'
import Partners from '@/components/templates/Partners'

import {useTranslations} from "next-intl"

export default function Home() {
  const t = useTranslations()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-60 font-bold'>
      <About />
      <div className='h-screen bg-white w-full z-10'/>
      <Zenith />
      <Partners />
    </main>
  )
}
