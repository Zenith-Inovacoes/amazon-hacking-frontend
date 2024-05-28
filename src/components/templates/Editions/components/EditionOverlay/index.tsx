'ues client'

import {
    Overlay,
    OverlayTrigger,
    OverlayContent,
} from '@/components/atoms/Overlay'
import { EditionOverlayProps } from './types'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Button } from '@/components/atoms'
import { useTranslations } from 'next-intl'
import challenger from 'public/EditionOverlayFlatArt.svg'
import waveMobile from 'public/WaveTabletEditionsOverlay.svg'
import waveTablet from 'public/WaveTabletEditionsOverlay.svg'
import OnçasIsland from 'public/OnçasIslandMB.svg'
import OnçasIslandMD from 'public/OnçasIslandMD.svg'
import CotijubaIsland from 'public/Cotijuba_Island.png'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { locales } from '@/services/utils/locale.utils'
import Link from 'next/link'

const EditionOverlay = ({ edition, image }: EditionOverlayProps) => {
    const t = useTranslations('Home.EditionsOverlay')
    const breakpoint = useBreakpoint()
    const pathname = usePathname()
    const [locale, setLocale] = useState<string>(
        locales.find((locale) => pathname?.includes(locale.locale))?.locale ||
            'en'
    )

    const copy = {
        header: {
            edition:
                edition === '2022'
                    ? locale === 'en'
                        ? '1st Edition'
                        : '1º Edição'
                    : locale === 'en'
                      ? '2nd Edition'
                      : '2º Edição',
            year: edition === '2022' ? '2022' : '2023',
            island: edition === '2022' ? 'Ilha das Onças' : 'Ilha de Cotijuba',
        },
        body: {
            title:
                edition === '2022'
                    ? locale === 'en'
                        ? 'Untouched Nature'
                        : 'Natureza Intocada'
                    : locale === 'en'
                      ? 'Where the River Meets Peace'
                      : 'Onde o Rio Encontra Paz',
            subtitle:
                edition === '2022'
                    ? locale === 'en'
                        ? 'Ilha das Onças Island is one of the largest riverine islands in the Guamá River archipelago, located near Belém. It is known for its rich biodiversity, with vast areas of preserved forests that are home to various species of fauna and flora.'
                        : 'A Ilha das Onças é uma das maiores ilhas fluviais do arquipélago do Rio Guamá, localizado próximo a Belém. É conhecida por sua rica biodiversidade, com vastas áreas de florestas preservadas que são habitat de diversas espécies de fauna e flora.'
                    : locale === 'en'
                      ? 'Ilha de Cotijuba Island, approximately 15 kilometers long and 4 kilometers wide, is renowned for its beautiful freshwater beaches with white sands, which attract tourists and locals seeking leisure and contact with nature.'
                      : 'Com cerca de 15 quilômetros de extensão e 4 quilômetros de largura, Cotijuba é conhecida por suas belas praias de água doce e areias brancas, que são um convite para turistas e moradores locais em busca de lazer e contato com a natureza.',
            subtitle2:
                edition === '2022'
                    ? locale === 'en'
                        ? 'In addition to its ecological importance, the island has a riverside community that maintains a traditional way of life, engaging in activities such as fishing, small-scale agriculture, and, in some cases, community-based tourism.'
                        : 'Além da importância ecológica, a ilha possui uma comunidade ribeirinha que mantém um modo de vida tradicional, com atividades como pesca, pequena agricultura e, em alguns casos, turismo de base comunitária.'
                    : locale === 'en'
                      ? 'The island stands out for its tranquil atmosphere and the preservation of its natural environment. It is covered by dense vegetation typical of the Amazon region and boasts rich wildlife. Among its most famous beaches are Vai Quem Quer Beach, Saudade Beach, and Pedrinhas Beach, each with unique characteristics that appeal to different types of visitors.'
                      : 'A ilha destaca-se por sua atmosfera tranquila e pela preservação de seu ambiente natural. É coberta por uma vegetação densa típica da região Amazônica e possui uma fauna rica. Entre as praias mais famosas estão a Praia do Vai Quem Quer, a Praia da Saudade e a Praia das Pedrinhas, cada uma com características próprias que atraem diferentes tipos de visitantes.',
        },
        footer: {
            title:
                edition === '2022'
                    ? locale === 'en'
                        ? 'The management of natural resources, environmental preservation, and mobile connectivity are constant challenges for the inhabitants of the Usina Vitória community. They face pressures such as deforestation and urbanization from Belém and surrounding areas.'
                        : 'A gestão de recursos naturais, preservação ambiental e conectividade móvel são desafios constantes para os habitantes da comunidade da Usina Vitória, que enfrentam pressões como o desmatamento e a urbanização provenientes de Belém e áreas circunvizinhas.'
                    : locale === 'en'
                      ? 'The “Movimento das Mulheres das Ilhas de Belém” (MMIB) is an organization that represents the specific interests and struggles of women living on the various islands near Belém do Pará. The association has highlighted several challenges, ranging from social and economic issues affecting these island communities to their geographical isolation and limited access to basic services such as education, healthcare, and transportation.'
                      : 'O Movimento das Mulheres das Ilhas de Belém (MMIB) é uma organização que representa interesses e lutas específicas das mulheres que vivem nas diversas ilhas próximas a Belém do Pará. A associação apontou diversos desafios, desde questões sociais e econômicas que afetam essas comunidades insulares, até seu isolamento geográfico e às limitações de acesso a serviços básicos como educação, saúde e transporte.',
        },
    }

    let waveImageSrc = waveMobile
    let islandImage = edition === '2022' ? OnçasIsland : CotijubaIsland

    if (breakpoint === 'md') {
        waveImageSrc = waveTablet
        islandImage = edition === '2022' ? OnçasIslandMD : CotijubaIsland
    } else if (breakpoint === 'lg' || breakpoint === 'xl') {
        waveImageSrc = waveTablet
        islandImage = edition === '2022' ? OnçasIslandMD : CotijubaIsland
    }

    return (
        <Overlay>
            <OverlayTrigger asChild>
                <Button variant='primary' className='px-10'>
                    {locale === 'en' ? 'Learn more...' : 'Saiba mais...'}
                </Button>
            </OverlayTrigger>
            <OverlayContent theme='dark' handlerColor='#FFF'>
                <div className='flex flex-col items-center justify-center relative w-full h-full md:gap-[111px] overflow-hidden'>
                    <div className='relative h-full w-full flex justify-center top-0 rounded-t-lg mb-9'>
                        <div className='w-full h-72'>
                            <Image
                                src={islandImage}
                                alt='Local onde os projetos do amazon hacking 2022 foram implementados'
                                className='rounded-b-full md:rounded-b-[72px] object-cover'
                                fill
                            />
                        </div>
                        <div className='flex flex-col items-center gap-y-4 md:gap-y-2 w-full absolute top-14'>
                            <p className='text-18 z-10 text-white md:text-18  lg:text-26'>
                                {copy.header.edition}
                            </p>
                            <p className='text-[42px] z-10 font-bold text-white md:text-[42px] lg:text-60'>
                                {copy.header.year}
                            </p>
                            <p className='text-18 z-10 text-white md:text-18 lg:text-[22px]'>
                                {copy.header.island}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5 px-8 items-center md:justify-center md:flex-row md:gap-5 md:px-14 w-full'>
                        <div className='flex flex-col gap-y-7 md:w-1/2'>
                            <h1 className='text-black text-40 font-bold leading-10 md:text-50 md:leading-65 lg:text-60'>
                                {copy.body.title}
                            </h1>
                            <p className='text-16 text-[#6E6E6E] md:text-18 lg:text-20'>
                                {copy.body.subtitle}
                            </p>
                            <p className='text-16 text-[#6E6E6E] md:text-18 lg:text-20'>
                                {copy.body.subtitle2}
                            </p>
                        </div>
                        <div className='relative w-[300px] h-[230px] md:w-[330px] lg:w-[415px] lg:h-[288px]'>
                            <Image
                                src={image}
                                alt='flat art que representa uma ilha'
                                fill
                            />
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image
                            src={waveImageSrc}
                            alt='Inicio da onda da seção'
                            className='w-full h-fit'
                        />
                        <div className='z-0 flex relative bg-black flex-col items-center h-full top-0 px-8 gap-y-7 md:gap-7 pt-28 md:px-14 md:flex-row-reverse lg:pt-0 2xl:pt-0 after:absolute after:top-0 after:inset-0 after:bg-black after:-translate-y-1 after:-z-10 before:absolute before:bottom-0 before:inset-0 before:bg-black before:translate-y-2 before:-z-10 pb-2 md:pb-16'>
                            <div className='flex flex-col items-center gap-y-7 md:items-start'>
                                <p className='text-40 text-white font-bold w-fit md:text-50 lg:text-60'>
                                    {locale === 'en'
                                        ? 'Challenges Encountered'
                                        : 'Desafios Encontrados'}
                                </p>
                                <p className='text-16 text-white md:text-18 lg:text-20'>
                                    {copy.footer.title}
                                </p>
                                <Button asChild className='z-30 w-fit'>
                                    <Link href={`${locale}/solutions`}>
                                        {locale === 'en'
                                            ? 'View Solutions'
                                            : 'Ver soluções'}
                                    </Link>
                                </Button>
                            </div>
                            <Image
                                src={challenger}
                                alt='Flat Art de uam pessoa montando um quebra cabeça'
                                className='w-[260px] h-[260px] z-30 lg:h-[325px] lg:w-[325px]'
                            />
                        </div>
                        <div className='w-full h-24 opacity-15 bg-tribalDecorator bg-repeat absolute bottom-[30%] lg:bottom-[10%]' />
                    </div>
                </div>
            </OverlayContent>
        </Overlay>
    )
}

export default EditionOverlay
