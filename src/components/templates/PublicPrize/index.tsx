import WavePublicPrize from 'public/images/Wave-Public-Prize.svg'
import WavePublicPrizeDesktop from 'public/images/Public-Prize-Wave-Dk.svg'
import Image from 'next/image'
import PublicPrizeOverlay from './components/PublicPrizeOverlay'
import { sections } from '@/constants/sections'
import CourseSelection from './components/CourseSelection'
import { useTranslations } from 'next-intl'

export default function PublicPrize() {
  const t = useTranslations("Home.PublicPrize")

  return (
    <section id={sections.publicPrize} className='relative bg-white pb-14 before:absolute lg:overflow-y-visible z-30 before:bg-white before:w-full before:h-4 before:-translate-y-1'>
      <div className="w-full h-16 opacity-40 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute top-[22%] sm:top-[20%] lg:bottom-12 lg:top-auto" />
      <div className='lg:flex justify-center items-center relative max-w-screen-2xl mx-auto'>
        <div className='flex flex-col gap-5 z-10 flex-1 lg:z-0'>
          <div className='flex flex-col gap-5 px-8 mb-28'>
            <h3 className='text-black font-bold text-40 leading-10 md:text-50 md:leading-44'>
              {t("title")}
            </h3>
            <p className='text-black font-normal text-16 leading-5 md:text-18 lg:text-20'>
              {t("subtitle")}
              <PublicPrizeOverlay />
            </p>
          </div>
        </div>
        <div className='py-20 relative px-8 flex justify-center items-center md:w-[100vw] md:mx-auto md:py-10 md:pt-32 lg:py-0 lg:pt-20 lg:flex-1 xl:pt-32'>
          <Image
            src={WavePublicPrize}
            alt='Sasdas'
            className='absolute top-0 h-[calc(100%+50px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-left lg:hidden'
          />
          <Image
            src={WavePublicPrizeDesktop}
            alt='Sasdas'
            className='absolute hidden top-0 h-[calc(100%+200px)] w-[200vw] object-cover object-top overflow-visible z-0 lg:object-[left_top] lg:block'
          />
          <CourseSelection />
        </div>
      </div>
    </section>
  )
}
