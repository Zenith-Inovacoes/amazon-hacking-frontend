"use client";

import { Button, Link } from "@/components/atoms";
import NextLink from "next/link";
import HeaderLogic from "./components/HeaderLogic";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/services/utils/locale.utils";
import { useState } from "react";
import { scrollTo } from "@/services/utils/scrollTo";
import { cn } from "@/services/utils/className.utils";
import { signIn, useSession } from "next-auth/react";
import DesktopMenu from "./components/DesktopMenu";
import Menu from "../Menu";
import { AccountMenu } from "./components/AccountMenu";

const Header = () => {
  const router = useRouter()
  const pathname = usePathname();
  const isInSolutions = pathname.includes("solutions");
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || "en"
  );

  const { data, status } = useSession();

  return (
    <HeaderLogic>
      <div className="lg:hidden">
        <Menu data={data} status={status} />
      </div>

      {!isInSolutions && (
        <div className="hidden lg:flex w-fit h-fit items-center justify-between flex-1 max-w-[570px] mx-2 gap-2">
          <Link
            onClick={() => scrollTo("about")}
            className="text-base *:tracking-[0.192px] text-white"
          >
            {locale === "en" ? "THE PROGRAM" : "O PROGRAMA"}
          </Link>
          <Link
            onClick={() => scrollTo("editions")}
            className="text-base *:tracking-[0.192px] text-white"
          >
            {locale === "en" ? "EDITIONS" : "EDIÇÕES"}
          </Link>
          <Link
            onClick={() => scrollTo("winners")}
            className="text-base *:tracking-[0.192px] text-white"
          >
            {locale === "en" ? "WINNERS" : "VENCEDORES"}
          </Link>
          <Link
            onClick={() => scrollTo("partners")}
            className="text-base *:tracking-[0.192px] text-white"
          >
            {locale === "en" ? "PARTNERS" : "PATROCINADORES"}
          </Link>
        </div>
      )}
  
      <div className="hidden lg:flex pr-4 xs:pr-[42px] md:pr-[62px]">
        {!isInSolutions ? (
          <Button asChild variant="primary">
            <NextLink href={`${locale}/solutions`} onMouseEnter={() => {
              router.prefetch(`/${locale}/solutions`);
            }}
              onTouchStart={() => {
                router.prefetch(`/${locale}/solutions`);
              }}>
              {locale === "en" ? "See Solutions" : "Ver Soluções"}
            </NextLink>
          </Button>
        ) : data ? (
          <AccountMenu user={data.user} />
        ) : (
          <div className="flex items-center gap-12">
            <Button asChild variant="primary">
              <NextLink href={`/${locale}/`}>
                {locale === "en" ? "Main page" : "Página principal"}
              </NextLink>
            </Button>
            <Button variant="secondary" onClick={() => signIn("google")}>
              {locale === "en" ? "Sign In" : "Fazer Login"}
            </Button>
          </div>
        )}
      </div>
      {/* <div
        className={cn(
          "hidden lg:flex w-full h-fit items-center justify-between mr-[62px] max-w-[min(24.88vw,293.6px)] relative",
          data && "max-w-[215px] xl:max-w-[380px]"
        )}
      > */}

      {/* {!data ? (
                        <Button
                            variant='secondary'
                            onClick={() => signIn('google')}
                        >
                            {locale === 'en' ? 'Sign In' : 'Fazer Login'}
                        </Button>
                    ) : (
                        <DesktopMenu data={data} />
                    )} */}
      {/* </div> */}
    </HeaderLogic>
  );
};

export default Header;
