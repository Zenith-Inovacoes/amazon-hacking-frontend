'ues client'

import {
    Overlay,
    OverlayTrigger,
    OverlayContent,
} from '@/components/atoms/Overlay'
import { EditionOverlayProps } from './types'
import Image from 'next/image'
import { cn } from '@/services/utils/className.utils'

import InstagramIcon from 'public/icons/instagram.svg'
import WhatsappIcon from 'public/icons/whatsapp.svg'
import XIcon from 'public/icons/twitter.svg'

import FirstWaveTop from 'public/ProjectOverlayWaves/Mobile/FirstWaveTop.svg'
import FirstWaveBottom from 'public/ProjectOverlayWaves/Mobile/FirstWaveBottom.svg'

import SecondWaveMobile from 'public/ProjectOverlayWaves/Mobile/SecondWave.png'
import SecondWaveTablet from 'public/ProjectOverlayWaves/Tablet/SecondWave.png'

import PersonalGoals from 'public/PersonalGoals.svg'

import { Button, SocialMediaButton } from '@/components/atoms'
import { signIn } from 'next-auth/react'
import { PiFacebookLogoBold } from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import challenger from 'public/EditionOverlayFlatArt.svg'
import waveMobile from 'public/WaveMobileEditionOverlay.svg'
import OnçasIsland from 'public/OnçasIslandMB.svg'

const MiddleWave = () => {
    return (
        <div className="bg-white -mt-20 md:-mt-28 lg:mt-0">
            <svg width="361" height="865" viewBox="0 0 361 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_941_17718)">
                    <path d="M-8 865.5H905.438C905.438 865.5 1427.08 506.181 964.055 157.985C501.029 -190.211 471.028 242.654 -41 69.3757L-8 865.5Z" fill="#0A0A0A" />
                </g>
                <defs>
                    <filter id="filter0_d_941_17718" x="-41" y="0.0999389" width="1211.57" height="865.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="9" dy="-12" />
                        <feGaussianBlur stdDeviation="2.95" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_941_17718" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_941_17718" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

const EditionOverlay = ({
    edition,
    image,
}: EditionOverlayProps) => {
    const t = useTranslations("EditionsOverlay");

    return (
        <Overlay>
            <OverlayTrigger asChild>
                <div className="relative h-[387px] pt-7">
                    <div className="absolute w-[295px] h-[387px] bg-white text-black rounded-xl">
                        aaaaaa
                    </div>
                </div>
            </OverlayTrigger>
            <OverlayContent className='relative' theme='dark'>
                <div className='flex flex-col items-center justify-center relative w-full h-full overflow-visible md:gap-[111px]'>
                    <div className='relative h-full w-full flex justify-center top-0 rounded-t-lg mb-9'>
                        <Image src={OnçasIsland} alt='Local onde os projetos do amazon hacking 2022 foram implementados' className='rounded-t-[30px]'/>
                        <div className='flex flex-col items-center gap-y-4 w-full absolute top-14'>
                            <p className='text-18 z-10 text-white '>{edition === '2022' ? '1º Edição' : '2º Edição'}</p>
                            <p className='text-[42px] z-10 font-bold text-white '>{edition === '2022' ? '2022' : '2023'}</p>
                            <p className='text-18 z-10 text-white '>{edition === '2022' ? 'Ilha das Onças' : 'Ilha de Cotijuba'}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5 px-8 items-center'>
                        <h1 className='text-black text-40 font-bold'>Natureza Intocada</h1>
                        <p className='text-16 text-neutral-500'>
                            A Ilha das Onças é uma das maiores ilhas fluviais do arquipélago do Rio Guamá, localizado próximo a Belém. É conhecida por sua rica biodiversidade, com vastas áreas de florestas preservadas que são habitat de diversas espécies de fauna e flora.
                        </p>
                        <p className='text-16 text-neutral-500'>
                            Além da importância ecológica, a ilha possui uma comunidade ribeirinha que mantém um modo de vida tradicional, com atividades como pesca, pequena agricultura e, em alguns casos, turismo de base comunitária.
                        </p>
                        <div className='relative w-[300px] h-[230px]'>
                            <Image src={image} alt='flat art que representa uma ilha' fill />
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src={waveMobile} alt='Flat Art de uam pessoa montando um quebra cabeça' className='w-[100vw]' />
                        <div className='z-10 flex absolute flex-col items-center h-full top-0 px-8 gap-y-7 pt-28 2xl:pt-0 after:absolute after:w-full after:bottom-[-2px] before:absolute'>
                            <p className='z-10 text-40 w-fit'>Desafios Encontrados</p>
                            <p className='text-16'>A gestão de recursos naturais, preservação ambiental e conectividade móvel são desafios constantes para os habitantes da comunidade da Usina Vitória, que enfrentam pressões como o desmatamento e a urbanização provenientes de Belém e áreas circunvizinhas. </p>
                            <Button className='w-fit'>Ver Soluções</Button>
                            <Image src={challenger} alt='Flat Art de uam pessoa montando um quebra cabeça' className='w-[260px] h-[260px] z-30' />
                            <div className="w-full h-24 opacity-30 z-20 bg-tribalDecorator bg-repeat absolute bottom-[30%]" />
                        </div>
                    </div>
                </div>
            </OverlayContent>
        </Overlay>
    )
}

export default EditionOverlay
