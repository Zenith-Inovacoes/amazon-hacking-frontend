import { cn } from "@/services/utils/className.utils";
import Image from "next/image";
type Props = {
  variant?: "primary" | "secondary";
};
// "mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"
export default function Tucupy({ variant = "primary" }: Props) {
  return (
    <div
      className={cn(
        "max-w-7xl",
        variant === "primary" ? "mx-auto py-24 sm:px-6 sm:py-32 lg:px-8" : "md:mx-4"
      )}
    >
      <div className="relative isolate overflow-hidden bg-[#191919] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 flex flex-col lg:flex-row lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#FEBE01" />
              <stop offset="1" stop-color="#191919" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto space-y-10 max-w-md text-center flex flex-col lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <img
            src="https://i.imgur.com/9jmhoIU.png"
            className="flex h-12 self-center md:self-start"
            alt="Logo da Empresa Tucupy Tecnologia"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transforme Ideias em Realidade com a Tucupy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Desenvolvemos soluções digitais sob medida para elevar o potencial
              da sua empresa. Desde aplicativos móveis até automações complexas,
              impulsionamos seu crescimento com inovação e eficiência.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="https://www.tucupy.com"
              className="rounded-md bg-[#FEBE01] hover:bg-[#A77E03] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Conheça mais
            </a>
            <a
              href="https://www.instagram.com/tucupytecnologia"
              className="text-sm font-semibold leading-6 text-white"
            >
              Siga-nos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative h-80 mt-4 md:mt-0">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none"
            src="https://i.imgur.com/9M1qEnY.jpeg"
            alt="App screenshot"
            width="1824"
            height="1080"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
