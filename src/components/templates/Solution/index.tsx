"use client";

import { SolutionProps } from "./type";

import Image from "next/image";

import XIcon from "public/icons/twitter.svg";
import WhatsappIcon from "public/icons/whatsapp.svg";
import LogoComputacaoAmostra from "public/icons/logo-computacao-amostra.svg";

import FirstWaveBottom from "public/ProjectOverlayWaves/Mobile/FirstWaveBottom.svg";
import FirstWaveTop from "public/ProjectOverlayWaves/Mobile/FirstWaveTop.svg";

import SecondWaveMobile from "public/ProjectOverlayWaves/Mobile/SecondWave.png";
import SecondWaveTablet from "public/ProjectOverlayWaves/Tablet/SecondWave.png";

import { voteSolution } from "@/app/[locale]/solutions/actions";
import { Button, SocialMediaButton } from "@/components/atoms";
import Tucupy from "@/components/templates/Tucupy";
import { env } from "@/services/libs/env.mjs";
import { locales } from "@/services/utils/locale.utils";
import { NormalizeTextToSlug } from "@/services/utils/normalize-text-to-slug";
import { Turnstile } from "@marsidev/react-turnstile";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { LuFacebook } from "react-icons/lu";
import { toast } from "sonner";

export function Solution({ project }: SolutionProps) {
  const id = project.id;
  const voteSolutionWithId = voteSolution.bind(null, id);

  const { status, data } = useSession();
  const [turnstileStatus, setTurnstileStatus] = useState("");

  const turnstileRef = useRef();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault();
    // setTurnstileStatus("");

    // const form = new FormData(formRef.current!);
    // if (!data) return;
    // SET TOKEN FORM
    // form.append("session_token", data.accessToken);

    // async function vote() {
    //   await voteSolutionWithId(form),
    //     toast.info("Aguarde 15 segundos para votar novamente.");

    //   setTimeout(() => {
    //     // @ts-ignore
    //     turnstileRef.current?.reset();
    //   }, 15000);
    // }

    // toast.promise(vote(), {
    //   loading: "Votando...",
    //   success: "Voto computado com sucesso!",
    //   error: "Erro ao computar voto!",
    // });
  }

  const pathname = usePathname();

  const [locale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || "en"
  );

  const ytURL =
    locale === "en" ? project.links.youtube.en : project.links.youtube.pt;
  console.log(project);
  const nameForSlug = NormalizeTextToSlug(project.name);
  const shareUrl = `${env.NEXT_PUBLIC_APP_URL}/${locale}/solutions/${nameForSlug}`;
  const shareMessage = encodeURIComponent(
    `Vote em ${project.name} como o melhor solução da Amazon Hacking!\n\n${shareUrl}`
  );
  const twitterShareMessage = encodeURIComponent(
    `Vote em ${project.name} como o melhor solução da Amazon Hacking!`
  );

  return (
    <div className="flex flex-col items-center pt-[calc(2.814rem+121px)] md:pt-[calc(6.6rem+121px)] lg:pt-[calc(5.19rem_+121px)]">
      <div className="flex flex-col w-full h-full items-center gap-[108px] px-6 pt-5 md:px-[65px] md:gap-[111px] lg:px-[102px]">
        <div className="flex flex-col items-center justify-center gap-[22px] w-full h-fit md:gap-[28px]">
          <h1 className="text-center text-black font-bold leading-[1.1] text-40 md:w-full md:text-50 lg:text-60">
            {project.name}
          </h1>
          <div className="bg-black w-full max-w-[400px] h-fit py-6 px-4 rounded-[20px] flex justify-center items-center md:order-2 md:py-36 md:max-w-[412px] md:px-11">
            <div className="relative w-40 h-40 rounded-[20px]">
              <Image
                src={project.links.banner || LogoComputacaoAmostra}
                alt={`Banner ${project.name}`}
                fill
                className="max-w-[204px] md:max-w-[325px]"
              />
            </div>
          </div>
          <p className="text-base tracking-[0.192px] leading-[20px] text-black px-3 md:px-0 md:mb-8 md:text-18 md:tracking-[0.216px] lg:text-20 lg:tracking-[0.24px]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-[22px] w-full h-fit">
          <h1 className="text-center text-black font-bold leading-[1.1] text-40 md:text-50 lg:text-60">
            Equipe
          </h1>
          <h2 className="text-center text-base leading-tight tracking-[0.192px] text-black px-3 md:text-18 md:leading-[20px] md:tracking-[0.216px] md:mb-[60px] lg:text-20 lg:tracking-[0.24px]">
            Conheça a equipe de alunos que formam essa solução:
          </h2>
          <div className="w-fit px-9 h-fit">
            <div className="projectOverlayShadow w-full h-fit rounded-[10px] flex flex-col items-center p-5 md:mb-[71px] md:px-[60px] md:py-10">
              <ul className="flex flex-col md:grid md:place-items-center md:grid-cols-2 gap-3 md:gap-4">
                {project.team.map((member, idx) => (
                  <li
                    key={idx}
                    className="flex text-black text-20 font-medium leading-[1.35] tracking-[0.24px] w-full text-start text-nowrap lg:text-24 lg:leading-[27px] lg:tracking-[0.288px]"
                  >
                    <div className="mr-2">•</div>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Image
          src={FirstWaveTop}
          alt="sdsdf"
          className="translate-y-[18vw] -mt-[18vw] blur-[2px] opacity-30 -rotate-1 scale-x-105 lg:translate-y-[19vw] lg:-mt-[19vw] xl:translate-y-[min(19vw,270px)] xl:-mt-[min(19vw,270px)]"
        />
        <Image
          src={FirstWaveTop}
          alt="First Wave Top"
          className="scale-x-105"
        />
        <div className="flex flex-col gap-[22px] w-full h-fit bg-black px-6 items-center justify-center outline outline-2 outline-black md:gap-[42px] md:px-[65px] lg:px-[102px] scale-[1.01]">
          <h1 className="text-white text-center font-bold text-40 leading-[1.1] md:text-50 lg:text-60">
            Elevator Pitch
          </h1>
          <iframe
            src={ytURL}
            title={`Elevator Pitch ${project.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-[21px] w-full max-w-[400px] aspect-video md:max-w-[700px] lg:max-w-[1000px]"
          ></iframe>
        </div>
        <Image
          src={FirstWaveBottom}
          alt="First Wave Bottom"
          className="-scale-x-[1.75]"
        />
      </div>

      <div
        className={
          "flex flex-col w-full h-full items-center justify-center gap-6 mb-[108px] px-6 md:px-[65px] md:mb-[150px] lg:px-[265px] lg:mb-[230px]"
        }
      >
        <h1 className="font-bold leading-[1.1] text-40 text-center text-black md:text-50 lg:text-60">
          Escolha seu favorito:
        </h1>
        <p className="tracking-[0.192px] text-base text-center text-black md:tracking-[0.216px] md:text-18 lg:text-20 lg:tracking-[0.24px]">
          Cada voto conta para destacar as ideias mais promissoras e
          inspiradoras de 2024. Não perca a chance de apoiar a criatividade e a
          inovação!
        </p>
        {status === "authenticated" ? (
          <>
            <form
              // ref={formRef}
              // onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <Turnstile
                id={project.id}
                siteKey={env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
                options={{
                  action: "submit-form",
                  theme: "light",
                  size: "normal",
                }}
                onError={() => setTurnstileStatus("error")}
                onExpire={() => setTurnstileStatus("expired")}
                onSuccess={() => setTurnstileStatus("solved")}
                ref={turnstileRef}
              />
              <Button
                type="submit"
                className="w-full disabled:bg-blue-300"
                disabled={true}
              >
                Votar
              </Button> 
            </form>
            <p className="mt-4 text-xs leading-6 text-neutral-600">
              Ao submeter esse voto, Você concorda com nossa{" "}
              <Link
                prefetch={false}
                href="/pt/privacy-policy"
                className="font-semibold text-brand-yellow underline"
              >
                Politica de Privacidade
              </Link>
              .
            </p>
          </>
        ) : (
          <>
            <h2 className="font-bold tracking-[0.192px] text-base text-center text-black md:tracking-[0.216px] md:text-18 lg:text-20 lg:tracking-[0.24px]">
              Faça login para prosseguir:
            </h2>
            <Button onClick={() => signIn("google")}>Fazer Login</Button>
          </>
        )}
        <span className="font-bold tracking-[0.192px] text-base text-center text-black lg:tracking-[0.216px] lg:text-18">
          Obs: Você pode votar quantas vezes quiser e quantos projetos quiser,
          porém os votos que iram ser contabilizados são os votos
          únicos de um projeto.
        </span>
      </div>

      <div className={"flex flex-col w-full h-full"}>
        <Tucupy variant="secondary" />
      </div>

      <div className="relative flex flex-col w-full h-full mb-[50%] md:mb-[20%]">
        <Image
          src={SecondWaveMobile}
          alt="Second Wave"
          priority
          className="absolute -z-50 md:hidden w-full h-fit max-w-[600px] right-0"
        />
        <Image
          src={SecondWaveTablet}
          alt="Second Wave"
          priority
          className="absolute -z-50 hidden md:block translate-x-12 lg:translate-x-20 w-full max-w-[1024px] right-0"
        />
        <div className="flex flex-col gap-[22px] w-full h-fit px-6 items-center justify-center pb-11 md:px-[65px] lg:px-[102px] mt-[min(25vw,320px)]">
          <h1 className="text-white text-center font-bold text-40 leading-[1.1] md:text-50 lg:text-60">
            Compartilhar
          </h1>

          <div>
            <Button
              onClick={() => {
                toast.promise(navigator.clipboard.writeText(shareUrl), {
                  loading: "Copiando link...",
                  success: "Link copiado!",
                  error: "Erro ao copiar link!",
                });
              }}
              className="my-3"
            >
              Copiar link
            </Button>
          </div>

          <div className="flex gap-5 items-center justify-center">
            <SocialMediaButton
              href={`http://twitter.com/share?text=${twitterShareMessage}&url=${shareUrl}`}
            >
              <Image src={XIcon} alt="X Icon" className="min-h-10" />
            </SocialMediaButton>
            <SocialMediaButton href={`https://wa.me/?text=${shareMessage}`}>
              <Image src={WhatsappIcon} alt="Whatsapp Icon" />
            </SocialMediaButton>
            <SocialMediaButton
              href={`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${twitterShareMessage}`}
            >
              <LuFacebook size={46} />
            </SocialMediaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
