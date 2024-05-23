import { cn } from "@/services/utils/className.utils"
import Image from "next/image"
import { Overlay } from "@/components/atoms/Overlay";
import editionsFlatArt from 'public/EditionsFlatArt.svg'
import { useTranslations } from "next-intl";
import waveMobile from 'public/waveMobileEditions.svg'
import { motion } from "framer-motion"
import EditionOverlay from "./components/EditionOverlay";

import island2022 from "public/FlatArt2022.svg"
import island2023 from "public/FlatArt2023.svg"

export default function Editions() {
    const t = useTranslations("Editions");

    const goalCardVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: .4,
                duration: .5,
                ease: "easeIn",
            },
        }
    }

    return (
        <section className="bg-white mx-auto flex flex-col gap-9 md:gap-20 h-full">
            <div className="w-full flex flex-col items-center px-5 mb-5 max-w-screen-2xl">
                <div className="relative w-[279px] h-[247px]">
                    <Image src={editionsFlatArt} alt='Flat Art de uma ilha' fill />
                </div>
                <div>
                    <h3 className="text-black text-40 font-bold">
                        3° Edição
                        {/* {t("label")} */}
                    </h3>
                    <p className="text-neutral-600 text-24 mb-7 font-semibold leading-7">
                        Saberes do Combú: Desenvolvendo uma bioeconomia inclusiva na Amazônia.
                        {/* {t("subtitle")} */}
                    </p>
                    <div className="flex flex-col gap-y-7">
                        <p className="text-neutral-500 font-medium text-16 leading-4">
                            A Ilha do Combu é uma ilha fluvial situada no Rio Guamá, bem próxima de Belém do Pará. Sendo lar para aproximadamente 2.200 habitantes. sua economia é impulsionada principalmente pelo extrativismo de produtos como açaí, cacau e cupuaçu.
                            {/* {t("mainText1")} */}
                        </p>
                        <p className="text-neutral-500 font-medium text-16 leading-4">
                            A ilha foi designada como Área de Proteção Ambiental para preservar sua rica biodiversidade e enfrenta desafios de crescimento turístico e infraestrutura, especialmente em saneamento e gestão de resíduos. Estes problemas exigem soluções cuidadosas para manter um equilíbrio entre desenvolvimento econômico e sustentabilidade ambiental.
                            {/* {t("mainText2")} */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-[100vw]">
                {/* <Image src={waveMobile} alt="mobileWave" /> */}
                <div className="absolute bg-cover bg-editionsMobileWave w-full  ">
                    <div className="w-full my-8 flex flex-col gap-y-7 justify-center items-center px-5">
                        <h4 className="text-40 font-semibold">
                            Retrospectiva
                            {/* {t("retrospective")} */}
                        </h4>
                        <p className="text-16 text-center">
                            Cada edição do Amazon Hacking contribuiu para o crescimento contínuo do programa e o impacto positivo na biodiversidade da Amazônia e suas comunidades. Descubra as realizações e desafios que marcaram nosso legado.
                            {/* {t("retrospectiveText")} */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-64">
                </div>

                <div className="relative z-10 max-w-[100vw] w-full mx-auto">
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[60%]" />
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[40%]" />
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[20%]" />
                    <motion.div viewport={{
                        once: true,
                        amount: .5,
                    }} initial="hidden" whileInView="show" variants={goalCardVariants} className="horizontal-snap cursor-grab lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 relative z-10 lg:grid lg:px-8 max-w-screen-2xl lg:mx-auto lg:place-items-center">
                        <div className="relative  bg-white rounded-[35px] shadow-2xl p-8">
                            <div className="relative w-[252px] h-[158px]">
                                <Image src={island2023} alt="Flat art de uma ilha" fill />
                            </div>
                            <div className="flex flex-col gap-y-3 items-center">
                                <p className="text-18 text-black">
                                    2º Edição
                                </p>
                                <p className="text-36 font-bold text-black">
                                    2023
                                </p>
                                <p className="text-18 text-neutral-500">
                                    Ilha de Cotijuba
                                </p>
                                <EditionOverlay edition="2023" image={island2023} />
                            </div>
                        </div>

                        <div className="relative  bg-white rounded-[35px] shadow-2xl p-8">
                            <div className="relative w-[252px] h-[158px]">
                                <Image src={island2022} alt="Flat art de uma ilha" fill />
                            </div>
                            <div className="flex flex-col gap-y-3 items-center">
                                <p className="text-18 text-black">
                                    1º Edição
                                </p>
                                <p className="text-36 font-bold text-black">
                                    2022
                                </p>
                                <p className="text-18 text-neutral-500">
                                    Ilha das Onças
                                </p>
                                <EditionOverlay edition="2022" image={island2022} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
