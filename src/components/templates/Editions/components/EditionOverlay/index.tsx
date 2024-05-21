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
import mobileWave from 'public/WaveMobileEditionOverlay.svg'


const edition2022 = {
    year: '2022',
    edition: '1º Edição',
    location: "Ilha das Onças",
    label: 'Natureza Intocada',
    mainText: 'A Ilha das Onças é uma das maiores ilhas fluviais do arquipélago do Rio Guamá, localizado próximo a Belém. É conhecida por sua rica biodiversidade, com vastas áreas de florestas preservadas que são habitat de diversas espécies de fauna e flora. Além da importância ecológica, a ilha possui uma comunidade ribeirinha que mantém um modo de vida tradicional, com atividades como pesca, pequena agricultura e, em alguns casos, turismo de base comunitária.',
    challenger: "Desafios Encontrados",
    challengerText: "A gestão de recursos naturais, preservação ambiental e conectividade móvel são desafios constantes para os habitantes da comunidade da Usina Vitória, que enfrentam pressões como o desmatamento e a urbanização provenientes de Belém e áreas circunvizinhas."
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
                <div className='flex flex-col items-center justify-center gap-[108px] w-full h-full overflow-visible md:gap-[111px]'>
                    <div className='flex flex-col justify-center items-center gap-y-4 bg-black rounded-full w-full top-0'>
                        <p className='text-18'>{edition === '2022' ? '1º Edição' : '2º Edição'}</p>
                        <p className='text-[42px] font-bold'>{edition === '2022' ? '2022' : '2023'}</p>
                        <p className='text-18'>{edition === '2022' ? 'Ilha das Onças' : 'Ilha de Cotijuba'}</p>
                    </div>
                    <div className='flex flex-col gap-y-5 px-4'>
                        <h1 className='text-black text-40 font-bold'>Natureza Intocada</h1>
                        <p className='text-16 text-neutral-500'>
                            A Ilha das Onças é uma das maiores ilhas fluviais do arquipélago do Rio Guamá, localizado próximo a Belém. É conhecida por sua rica biodiversidade, com vastas áreas de florestas preservadas que são habitat de diversas espécies de fauna e flora.
                        </p>
                        <p className='text-16 text-neutral-500'>
                            Além da importância ecológica, a ilha possui uma comunidade ribeirinha que mantém um modo de vida tradicional, com atividades como pesca, pequena agricultura e, em alguns casos, turismo de base comunitária.
                        </p>
                        <div className='relative w-[250px] h-[230px]'>
                            <Image src={image} alt='flat art que representa uma ilha' fill />
                        </div>
                    </div>
                    <div className='flex flex-col h-48 relative w-full py-16'>
                        <div className='z-10 absolute'>ajhas</div>
                        <Image src={mobileWave} alt='Onda de fundo' className='inset-0 z-0' />
                    </div>
                </div>
            </OverlayContent>
        </Overlay>
    )
}

export default EditionOverlay
