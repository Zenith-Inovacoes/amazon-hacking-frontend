import Image from "next/image"
import NoticeOverlayImage from "public/images/NoticeOverlay.svg"
import LogoZenith from "public/images/LogoZenithPreta.svg"
import { useTranslations } from "next-intl"

import { Root, Content, Overlay, Portal, Close } from "./DialogAbstraction"

const NoticeOverlay = () => {

    const t = useTranslations("Home.NoticeOverlay")

    return (
        <Root defaultOpen>
            <Portal>
                <Overlay className=" bg-black/60 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-start overflow-y-auto z-50">
                    <Content>
                        <div className=" justify-center items-center py-5 px-4 flex flex-col bg-white w-full rounded-[18px] gap-5 md:p-[55px] lg:p-[37px] max-w-[762px]">
                            <Image
                                src={NoticeOverlayImage}
                                alt="Imagem de atenção"
                                className=" w-full h-fit max-w-[190px] mb-[14px] md:mb-[19px] lg:mb-[41px]"
                            />
                            <h1 className=" text-black text-center text-40 font-bold leading-[1.1] md:text-50 lg:text-60">{t("title")}</h1>
                            <p className=" text-black text-center whitespace-pre-line text-base">{t.rich("description", {
                                zenith: (chunks) => (
                                    <b className="text-secondary-400">{chunks}</b>
                                ),
                                bold: (chunks) => (
                                    <b>{chunks}</b>
                                ),
                                italic: (chunks) => (
                                    <i>{chunks}</i>
                                )
                            })}</p>

                            <Image
                                src={LogoZenith}
                                alt="Logo Zenith Inova"
                                className=" w-full h-fit max-w-[127px]"
                            />

                            <Close text={t("button")}/>

                        </div>
                    </Content>
                </Overlay>
            </Portal>
        </Root>
    )
}

export default NoticeOverlay