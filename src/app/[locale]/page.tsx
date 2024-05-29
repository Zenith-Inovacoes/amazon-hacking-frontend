import Hero from '@/components/templates/Hero'
import About from '@/components/templates/About'
import Zenith from '@/components/templates/Zenith'
import PublicPrize from '@/components/templates/PublicPrize'
import CommunityPrize from '@/components/templates/CommunityPrize'
import Partners from '@/components/templates/Partners'
import WinnerContainer from '@/components/templates/Winners/WinnerContainer'

import { useTranslations } from 'next-intl'
import EditionsContainer from '@/components/templates/Editions/EditionsContainer'
import { Header } from '@/components/molecules'

export default function Home() {
    const t = useTranslations('Home')

    return (
        <>
            <Header />
            <Hero />
            <About />
            <EditionsContainer />
            <Zenith />
            <WinnerContainer />
            <PublicPrize />
            <CommunityPrize />
            <Partners />
        </>
    )
}
