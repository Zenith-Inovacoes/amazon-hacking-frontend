import { useTranslations } from "next-intl";
import { Gallery } from "./components/Gallery";


export default function Solutions() {
  const t = useTranslations('Solutions')

  return (
    <main className="flex flex-col items-center pt-[calc(2.814rem+121px)] md:pt-[calc(6.6rem+121px)] lg:pt-[calc(5.19rem_+121px)]">
      <div className="flex flex-col px-8 items-center gap-[1.25rem] text-center md:gap-7">
        <h1 className="text-black text-40 md:text-50 font-bold lg:text-60">
          {t('title')}
        </h1>
        <p className="text-neutral-600 text-16  max-w-[65ch] font-semibold leading-7 md:text-18 lg:text-20">
          {t('description')}
        </p>
      </div>

      <div className="w-full h-24 mt-8 md:mt-[1.9rem] lg:mt-7 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain" />

      <Gallery />
    </main>
  );
}
