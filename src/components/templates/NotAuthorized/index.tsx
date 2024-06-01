"use client";
import Image from "next/image";
import NotFoundImage from "public/401Image.svg";
import Button from "@/components/atoms/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function NotAuthorized() {
  const t = useTranslations("401")

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className="flex bg-white min-h-screen w-full flex-col items-center justify-center py-4">
      <div className="max-[370px]:px-5 px-11 md:px-20 max-w-5xl flex flex-col items-center gap-y-9 h-fit">
        <h2 className="text-black text-center font-bold text-40 leading-10 md:text-50 lg:text-60">
          {t("title")}
        </h2>
        <p className="text-neutral-500 text-center max-[370px]:text-clip text-16 md:text-18">
          {t("description")}
        </p>
        <Button
          className="w-fit"
          variant="primary"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
        >
          {t("button.tryAgain")}
        </Button>
        <Button className="w-fit" asChild variant="secondary">
          <a href="/">{t("button.returnHome")}</a>
        </Button>
      </div>
      <div className="relative mb-3 max-[370px]:h-[150px] max-[370px]:w-[300px] w-[349px] h-[233px] md:w-[730px] md:h-[454px] lg:w-[824px] lg:h-[476px]">
        <Image
          src={NotFoundImage}
          alt="Imagem que contém pessoas carregando o número 404"
          fill
        />
      </div>
      <div className="bg-repeat bg-404Decorator w-full h-[87px]" />
    </div>
  );
}
