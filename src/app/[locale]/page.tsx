import { Header } from '@/components/molecules'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <main className='relative flex w-full justify-center bg-gray-700 min-h-[500vh]'>
      <Header />
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-center text-60 font-bold tracking-widest">
    //   {t("title")}
    // </main>
  )
}
