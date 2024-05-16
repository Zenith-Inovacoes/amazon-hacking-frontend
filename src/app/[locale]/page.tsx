import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-60 font-bold tracking-widest'>
      {t('title')}
    </main>
  )
}
