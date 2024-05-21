import { Checkbox } from '@/components/atoms'
import Image from 'next/image'

import WinnersWave from 'public/Waves/WinnerWaves/Mobile/WinnersWave.svg'
import WinnersWaveContent from 'public/Waves/WinnerWaves/Mobile/WinnersWaveContent.svg'

import WinnersWaveTablet from 'public/Waves/WinnerWaves/Tablet/WinnersWave.svg'

import WinnersWaveDesktop from 'public/Waves/WinnerWaves/Desktop/WinnerWave.svg'

const Winners = () => {
  return (
    <section className='relative bg-white flex flex-col items-center justify-center w-full h-full overflow-x-hidden py-32'>
      <div className='flex flex-col max-w-screen-2xl w-full items-center justify-center gap-[84px] md:gap-[226px] lg:flex-row lg:justify-between lg:gap-0'>
        <div className='flex flex-col w-full items-center justify-center gap-[22px] px-10 md:px-[62px] md:gap-7 md:items-start lg:px-0 lg:pl-[100px]'>
          <h1 className='text-black text-center font-bold text-40 leading-[1.1] md:text-start md:text-50'>
            Pódio da imersão
          </h1>
          <p className='text-black text-center text-base tracking-[0.192px] md:text-start md:mb-[22px] md:text-18 md:tracking-[0.216px]'>
            Os vencedores implementaram projetos inovadores e sustentáveis na
            Amazônia, respeitando o conhecimento local. Confira as soluções
            impactantes de destaque.
          </p>
          <h2 className='text-black font-semibold text-36 text-center tracking-[0.432px] md:text-start'>
            Escolha um ano:
          </h2>
          <div className='flex items-center justify-center w-full gap-[22px] md:justify-start'>
            <Checkbox>2023</Checkbox>
            <Checkbox>2022</Checkbox>
          </div>
        </div>
        <div className='absolute bg-repeat bg-symbol w-full h-full max-h-[87px] opacity-60 inset-0 top-1/2 xs:translate-y-20 translate-y-40 md:-translate-y-[min(15.65vw,160px)] lg:top-full lg:-translate-y-52' />
        <div className='relative flex flex-col w-full h-full items-start justify-center lg:items-end'>
          <Image
            src={WinnersWave}
            alt='Winners Wave'
            className='w-full max-w-[500px] z-10 md:hidden'
          />
          <Image
            src={WinnersWaveContent}
            alt='Winners Wave Content'
            fill
            className='absolute px-8 max-w-[500px] z-10 md:translate-x-[min(20.33vw,208px)] md:translate-y-[min(2.73vw,28px)] md:max-w-[462px] md:max-h-[462px] md:px-0 lg:hidden'
          />

          <Image
            src={WinnersWaveTablet}
            alt='Winners Wave Shadow'
            className='absolute hidden md:block -translate-y-4 translate-x-2 opacity-30 blur-[2px] lg:hidden'
          />
          <Image
            src={WinnersWaveTablet}
            alt='Winners Wave'
            className='hidden md:block lg:hidden'
          />

          <div className='hidden relative lg:flex items-center justify-center -mr-52 min-w-[min(68.35vw,1050px)]'>
            <Image
              src={WinnersWaveDesktop}
              alt='Wave Shadow'
              className='absolute opacity-30 blur-[2px] -translate-y-4 translate-x-2'
            />
            <Image src={WinnersWaveDesktop} alt='Wave' />
            <Image
              src={WinnersWaveContent}
              alt='Winners Wave Content'
              className='absolute z-10 max-w-[462px] max-h-[462px] w-full h-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Winners
