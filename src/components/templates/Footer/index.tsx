import ZenithLogo from 'public/images/Zenith-Logo.svg'
import AmazonHackingLogo from 'public/images/Footer-Logo-Amazon-Hacking.svg'
import FooterButton from '@/components/atoms/FooterButton'
import SocialMediaButton from '@/components/atoms/SocialMediaButton'
import Link from '@/components/atoms/Link'
import Image from 'next/image'
import InstagramFillIcon from 'public/icons/instagram-fill.svg'
import FacebookFillIcon from 'public/icons/facebook.svg'
import YoutubeFillIcon from 'public/icons/youtube.svg'
import Separator from '@/components/atoms/Separator'

const Waves = () => {
  return (
    <div className='relative after:bg-primary-100 after:w-full bg-white after:h-2 after:absolute after:-bottom-1'>
      <svg
        id='footer-wave-second-shadow'
        className='rotate-0 duration-300 absolute bottom-8'
        viewBox='0 0 1440 190'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='footer-wave-second-shadow-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stop-color='#000' offset='0%'></stop>
            <stop stop-color='#000' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#footer-wave-second-shadow-gradient)'
          d='M0,57L120,57C240,57,480,57,720,72.8C960,89,1200,120,1440,117.2C1680,114,1920,76,2160,69.7C2400,63,2640,89,2880,82.3C3120,76,3360,38,3600,34.8C3840,32,4080,63,4320,85.5C4560,108,4800,120,5040,104.5C5280,89,5520,44,5760,41.2C6000,38,6240,76,6480,85.5C6720,95,6960,76,7200,63.3C7440,51,7680,44,7920,34.8C8160,25,8400,13,8640,31.7C8880,51,9120,101,9360,129.8C9600,158,9840,165,10080,152C10320,139,10560,108,10800,95C11040,82,11280,89,11520,91.8C11760,95,12000,95,12240,82.3C12480,70,12720,44,12960,44.3C13200,44,13440,70,13680,82.3C13920,95,14160,95,14400,82.3C14640,70,14880,44,15120,34.8C15360,25,15600,32,15840,38C16080,44,16320,51,16560,44.3C16800,38,17040,19,17160,9.5L17280,0L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z'
        ></path>
      </svg>
      <svg
        id='footer-wave-first-shadow'
        className='rotate-0 duration-300 absolute bottom-4'
        viewBox='0 0 1440 190'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='footer-wave-first-shadow-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stop-color='#005194' offset='0%'></stop>
            <stop stop-color='#005194' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#footer-wave-first-shadow-gradient)'
          d='M0,57L120,57C240,57,480,57,720,72.8C960,89,1200,120,1440,117.2C1680,114,1920,76,2160,69.7C2400,63,2640,89,2880,82.3C3120,76,3360,38,3600,34.8C3840,32,4080,63,4320,85.5C4560,108,4800,120,5040,104.5C5280,89,5520,44,5760,41.2C6000,38,6240,76,6480,85.5C6720,95,6960,76,7200,63.3C7440,51,7680,44,7920,34.8C8160,25,8400,13,8640,31.7C8880,51,9120,101,9360,129.8C9600,158,9840,165,10080,152C10320,139,10560,108,10800,95C11040,82,11280,89,11520,91.8C11760,95,12000,95,12240,82.3C12480,70,12720,44,12960,44.3C13200,44,13440,70,13680,82.3C13920,95,14160,95,14400,82.3C14640,70,14880,44,15120,34.8C15360,25,15600,32,15840,38C16080,44,16320,51,16560,44.3C16800,38,17040,19,17160,9.5L17280,0L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z'
        ></path>
      </svg>
      <svg
        id='footer-wave'
        className='rotate-0 duration-300'
        viewBox='0 0 1440 190'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='footer-wave-gradient' x1='0' x2='0' y1='1' y2='0'>
            <stop stop-color='rgba(1, 101, 183, 1)' offset='0%'></stop>
            <stop stop-color='rgba(1, 101, 183, 1)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#footer-wave-gradient)'
          d='M0,57L120,57C240,57,480,57,720,72.8C960,89,1200,120,1440,117.2C1680,114,1920,76,2160,69.7C2400,63,2640,89,2880,82.3C3120,76,3360,38,3600,34.8C3840,32,4080,63,4320,85.5C4560,108,4800,120,5040,104.5C5280,89,5520,44,5760,41.2C6000,38,6240,76,6480,85.5C6720,95,6960,76,7200,63.3C7440,51,7680,44,7920,34.8C8160,25,8400,13,8640,31.7C8880,51,9120,101,9360,129.8C9600,158,9840,165,10080,152C10320,139,10560,108,10800,95C11040,82,11280,89,11520,91.8C11760,95,12000,95,12240,82.3C12480,70,12720,44,12960,44.3C13200,44,13440,70,13680,82.3C13920,95,14160,95,14400,82.3C14640,70,14880,44,15120,34.8C15360,25,15600,32,15840,38C16080,44,16320,51,16560,44.3C16800,38,17040,19,17160,9.5L17280,0L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z'
        ></path>
      </svg>
    </div>
  )
}

const Wave2 = () => {
  return (
    <div className='relative after:absolute after:h-2 after:w-full after:bg-black after:-bottom-1'>
      <svg
        id='footer-terms-shadow-wave'
        className='rotate-0 duration-300 absolute bottom-3'
        viewBox='0 0 1440 190'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='footer-terms-wave-shadow-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stop-color='rgba(0, 0, 0, .25)' offset='0%'></stop>
            <stop stop-color='rgba(0, 0, 0, .25)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#footer-terms-wave-shadow-gradient)'
          d='M0,57L120,76C240,95,480,133,720,142.5C960,152,1200,133,1440,126.7C1680,120,1920,127,2160,136.2C2400,146,2640,158,2880,152C3120,146,3360,120,3600,107.7C3840,95,4080,95,4320,98.2C4560,101,4800,108,5040,104.5C5280,101,5520,89,5760,91.8C6000,95,6240,114,6480,114C6720,114,6960,95,7200,98.2C7440,101,7680,127,7920,120.3C8160,114,8400,76,8640,63.3C8880,51,9120,63,9360,66.5C9600,70,9840,63,10080,79.2C10320,95,10560,133,10800,129.8C11040,127,11280,82,11520,72.8C11760,63,12000,89,12240,88.7C12480,89,12720,63,12960,57C13200,51,13440,63,13680,60.2C13920,57,14160,38,14400,50.7C14640,63,14880,108,15120,117.2C15360,127,15600,101,15840,88.7C16080,76,16320,76,16560,76C16800,76,17040,76,17160,76L17280,76L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z'
        ></path>
      </svg>
      <svg
        id='footer-terms-wave'
        className='rotate-0 duration-300'
        viewBox='0 0 1440 190'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='footer-terms-wave-gradient'
            x1='0'
            x2='0'
            y1='1'
            y2='0'
          >
            <stop stop-color='rgba(0, 0, 0, 1)' offset='0%'></stop>
            <stop stop-color='rgba(0, 0, 0, 1)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          className='translate-x-0 translate-y-0 opacity-100'
          fill='url(#footer-terms-wave-gradient)'
          d='M0,57L120,76C240,95,480,133,720,142.5C960,152,1200,133,1440,126.7C1680,120,1920,127,2160,136.2C2400,146,2640,158,2880,152C3120,146,3360,120,3600,107.7C3840,95,4080,95,4320,98.2C4560,101,4800,108,5040,104.5C5280,101,5520,89,5760,91.8C6000,95,6240,114,6480,114C6720,114,6960,95,7200,98.2C7440,101,7680,127,7920,120.3C8160,114,8400,76,8640,63.3C8880,51,9120,63,9360,66.5C9600,70,9840,63,10080,79.2C10320,95,10560,133,10800,129.8C11040,127,11280,82,11520,72.8C11760,63,12000,89,12240,88.7C12480,89,12720,63,12960,57C13200,51,13440,63,13680,60.2C13920,57,14160,38,14400,50.7C14640,63,14880,108,15120,117.2C15360,127,15600,101,15840,88.7C16080,76,16320,76,16560,76C16800,76,17040,76,17160,76L17280,76L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z'
        ></path>
      </svg>
    </div>
  )
}

export default function Footer() {
  const links = [
    {
      title: 'O programa',
      href: '#programa',
    },
    {
      title: 'Edições',
      href: '#edicoes',
    },
    {
      title: 'Vencedores',
      href: '#vencedores',
    },
    {
      title: 'Patrocinadores',
      href: '#patrocinadores',
    },
  ]

  return (
    <>
      <Waves />
      <footer className='bg-primary-100 relative z-10'>
        <div className='flex flex-col justify-center items-center gap-9 max-w-72 mx-auto md:max-w-[548px] relative z-10 md:gap-14 lg:max-w-screen-2xl lg:flex-row lg:px-8 lg:justify-between lg:gap-4 xl:gap-10'>
          <div className='flex flex-col justify-center items-center gap-8 md:gap-10 lg:items-start lg:order-3'>
            <span className='text-white text-24 leading-7 font-bold md:text-28'>
              Menu
            </span>
            <ul className='flex flex-col gap-7 items-center justify-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-start lg:gap-x-6 xl:gap-x-10 lg:gap-y-7 lg:text-left'>
              {links.map((link, index) => (
                <li key={index}>
                  <FooterButton className='p-0' asChild>
                    <a href={link.href}>{link.title}</a>
                  </FooterButton>
                </li>
              ))}
            </ul>
          </div>
          <Separator orientation='horizontal' className='lg:hidden' />
          <Separator
            orientation='vertical'
            className='hidden lg:block h-[216px] order-2'
          />
          <div className='relative w-full max-w-56 h-20 md:h-32 md:max-w-96 xl:h-36 lg:order-1 lg:flex-1'>
            <Image
              src={AmazonHackingLogo}
              alt='Logo do programa Amazon Hacking'
              fill
            />
          </div>
          <Separator
            orientation='vertical'
            className='hidden lg:block h-[216px] order-4'
          />
          <div className='flex flex-col items-center justify-center gap-9 py-4 md:gap-16 lg:items-start lg:order-5 lg:py-0'>
            <div className='flex flex-col gap-6 items-center justify-center'>
              <span className='hidden text-white text-24 font-bold leading-24 md:block'>
                Redes sociais:
              </span>
              <div className='flex gap-6'>
                <SocialMediaButton
                  variant='fill'
                  href='https://zenithinova.com.br'
                >
                  <Image
                    src={InstagramFillIcon}
                    alt='Ícone do instagram preenchido'
                  />
                </SocialMediaButton>
                <SocialMediaButton
                  variant='fill'
                  href='https://zenithinova.com.br'
                >
                  <Image
                    src={FacebookFillIcon}
                    alt='Ícone do facebook preenchido'
                  />
                </SocialMediaButton>
                <SocialMediaButton
                  variant='fill'
                  href='https://zenithinova.com.br'
                >
                  <Image
                    src={YoutubeFillIcon}
                    alt='Ícone do youtube preenchido'
                  />
                </SocialMediaButton>
              </div>
            </div>
            <div className='relative w-56 h-14 md:h-16 md:w-72 lg:w-64 xl:w-72'>
              <Image src={ZenithLogo} alt='Logo da empresa Zenith Inova' fill />
            </div>
          </div>
        </div>
        <Wave2 />
        <div className='bg-black py-8 relative z-10 md:pb-14 lg:pt-0'>
          <div className='flex flex-col gap-9 max-w-screen-2xl lg:flex-row-reverse lg:items-center lg:mx-auto lg:justify-between lg:px-8'>
            <div className='h-4 flex items-center justify-center gap-4 md:gap-12 lg:gap-6'>
              <Link
                className='text-xs md:text-16'
                href='https://zenithinova.com.br'
              >
                Termos e condições
              </Link>
              <Separator orientation='vertical' />
              <Link
                className='text-xs md:text-16'
                href='https://zenithinova.com.br'
              >
                Políticas de privacidade
              </Link>
            </div>
            <div className='flex flex-col text-xs text-white font-normal items-center justify-center md:text-16 md:flex-row md:gap-2'>
              <span>2024 © CESUPA. Todos direitos reservados.</span>
              <span>
                Desenvolvido por{' '}
                <Link
                  className='text-xs md:text-16 font-bold'
                  href='https://zenithinova.com.br'
                >
                  Zenith Inova
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
