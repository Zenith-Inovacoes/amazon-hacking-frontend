import { Header } from '@/components/molecules'
import Hero from '@/components/templates/Hero'
import About from '@/components/templates/About'
import Editions from '@/components/templates/Editions'
import Zenith from '@/components/templates/Zenith'
import Winners from '@/components/templates/Winners'
import PublicPrize from '@/components/templates/PublicPrize'
import CommunityPrize from '@/components/templates/CommunityPrize'
import Partners from '@/components/templates/Partners'
import Footer from '@/components/templates/Footer'
import WinnerContainer from '@/components/templates/Winners/WinnerContainer'

import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className='scroll-smooth'>
      <Header />
      <Hero />
      <About />
      <Editions />
      <Zenith />
      <WinnerContainer />
      <PublicPrize />
      <CommunityPrize />
      <Partners />
      <Footer />
    </main>
  )
}
