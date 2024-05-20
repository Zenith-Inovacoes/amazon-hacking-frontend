import { cn } from "@/services/utils/className.utils"
import Image from "next/image"
import { Overlay } from "@/components/atoms/Overlay";
import editionsFlatArt from 'public/EditionsFlatArt.svg'
import { useTranslations } from "next-intl";
import waveMobile from 'public/waveMobileEditions.svg'
import { motion } from "framer-motion"

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
                    <h3 className="text-black text-40 font-bold">{t("label")}</h3>
                    <p className="text-neutral-600 text-24 mb-7 font-semibold leading-7">{t("subtitle")}</p>
                    <div className="flex flex-col gap-y-7">
                        <p className="text-neutral-500 font-medium text-16 leading-4">{t("mainText1")}</p>
                        <p className="text-neutral-500 font-medium text-16 leading-4">{t("mainText2")}</p>
                    </div>
                </div>
            </div>
            <div className="relative w-[100vw]">
                {/* <Image src={waveMobile} alt="mobileWave" /> */}
                <div className="absolute bg-cover bg-editionsMobileWave w-full  ">
                    <div className="w-full my-8 flex flex-col gap-y-7 justify-center items-center px-5">
                        <h4 className="text-40">
                            {t("retrospective")}
                        </h4>
                        <p className="text-16 font-medium text-center">{t("retrospectiveText")}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-64">
                </div>
                {/* <div className=" w-full flex jus"> */}
                    {/* <div className="relative h-[387px] pt-7">
                        <div className="absolute w-[295px] h-[387px] bg-white rounded-xl">
                            aaaaaa
                        </div>
                    </div>

                    <div className="relative h-[387px] pt-7">
                        <div className="absolute w-[295px] h-[387px] bg-white rounded-xl">
                            aaaaaa
                        </div>
                    </div> */}

                    <div className="relative z-10 max-w-[100vw] w-full mx-auto bg-tribalDecorator bg-repeat">
                        {/* <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[60%]" /> */}
                        {/* <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[20%]" /> */}
                        <motion.div viewport={{
                            once: true,
                            amount: .5,
                        }} initial="hidden" whileInView="show" variants={goalCardVariants} className="horizontal-snap cursor-grab lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 relative z-10 lg:grid lg:px-8 max-w-screen-2xl lg:mx-auto lg:place-items-center">
                            <div className="relative h-[387px] pt-7">
                                <div className="absolute w-[295px] h-[387px] bg-white rounded-xl">
                                    aaaaaa
                                </div>
                            </div>

                            <div className="relative h-[387px] pt-7">
                                <div className="absolute w-[295px] h-[387px] bg-white rounded-xl">
                                    aaaaaa
                                </div>
                            </div>
                        </motion.div>
                    </div>
                {/* </div> */}
            </div>
        </section>
    )
}
