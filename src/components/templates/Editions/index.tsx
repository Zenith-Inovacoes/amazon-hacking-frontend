import { cn } from "@/services/utils/className.utils"
import Image from "next/image"
import editionsFlatArt from 'public/EditionsFlatArt.svg'
import { useTranslations } from "next-intl";
import waveMobile from 'public/waveMobileEditions.svg'

export default function Editions() {
    const t = useTranslations("Editions");

    return (
        <section className="bg-white mx-auto flex max-w-screen-2xl flex-col gap-9 md:gap-20">
            <div className="w-full flex flex-col items-center px-5 mb-5 ">
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

                <div className="relative h-24">
                    <div className="absolute bg-cover bg-editionsMobileWave w-[100vw] ">
                        asdadas
                    </div>
                </div>
            </div>
        </section>
    )
}
