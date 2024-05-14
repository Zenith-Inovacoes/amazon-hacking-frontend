import Image from 'next/image'
import TopWave from 'public/ZenithWaves/Mobile/TopWave.svg'

const Zenith = () => {
  return (
    <div className='flex w-full h-full justify-center bg-white overflow-hidden flex-col'>
      <Image src={TopWave} alt='Zenith Top Wave' className='w-full h-full' />
      <div className='flex bg-secondary-400 w-full h-full max-w-screen-2xl items-center justify-center flex-col pt-[70px]'>
        <h1 className='font-bold text-40 leading-[1.1] text-white'>
          O ápice da inovação surgiu daqui.
        </h1>
      </div>
    </div>
  )
}

export default Zenith
