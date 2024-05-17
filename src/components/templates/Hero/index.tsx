import { BounceButton } from "@/components/atoms"

export default function Hero() {
    return (
        <section className="bg-[url('/images/Hero-Bg.png')] bg-cover bg-center bg-no-repeat relative min-h-[100vh] py-48 md:bg-left lg:bg-center">
            <div className="absolute inset-0 bg-primary-100 mix-blend-soft-light" />
            <div className="w-full h-16 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[5%]" />
            <div className="flex flex-col text-left max-w-screen-2xl mx-auto gap-10 relative z-10 items-center justify-center px-8 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] md:place-items-center md:gap-y-12 lg:px-16 lg:gap-y-8 xl:gap-y-12 xl:gap-x-20">
                <h1 className="text-white text-40 leading-10 font-bold text-left md:text-50 md:leading-62 md:place-self-start lg:text-60 lg:leading-65 md:col-start-1 md:col-end-3 md:max-w-[24ch] lg:col-start-1 lg:col-end-2">TECNOLOGIA E TRADIÇÃO EM HARMONIA</h1>
                <div className="flex flex-col gap-10 w-full">
                    <p className="text-white text-24 font-bold leading-6 md:text-28 md:leading-7">05 A 07 DE JUNHO</p>
                    <h2 className="text-white font-normal text-balance text-16 leading-5 md:text-18 md:max-w-[32ch] lg:text-20 lg:leading-6 lg:max-w-[54ch]">
                        Uma celebração de inovação e criatividade, abrindo caminhos para futuras gerações.
                    </h2>
                </div>
                <iframe className="mt-16 aspect-video w-full md:mt-0 md:max-w-[420px] rounded-2xl lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:max-w-[576px]" src="https://www.youtube.com/embed/IKr2TJyrBBY?si=_hCcIo6At9UghqVl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className="w-full flex justify-center items-center absolute -bottom-7 translate-y-full">
                <BounceButton className="text-black">
                    Explorar mais
                </BounceButton>
            </div>
        </section>
    )
}