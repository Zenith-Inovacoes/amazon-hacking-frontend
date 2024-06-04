"use client";

import { cn } from "@/services/utils/className.utils";
import Image from "next/image";
import MenuTitle from "./components/MenuTitle";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Link,
} from "@/components/atoms";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { useMenu } from "@/contexts/menu";
import { MenuProps } from "./types";

import AmazonHacking from "public/images/AmazonHackingColoredLogo.svg";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import { useEffect, useState } from "react";
import { locales } from "@/services/utils/locale.utils";
import { signIn, signOut, useSession } from "next-auth/react";

import { sections } from "@/constants/sections";
import { scrollTo } from "@/services/utils/scrollTo";

function DesktopMenu() {
  const pathname = usePathname();
  const session = useSession();
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || "en"
  );

  return (
    <div className="flex flex-col items-start justify-start gap-[18px]">
      <div className="flex gap-[10px] items-center justify-center">
        <Link className="font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50">
          {locale === "en" ? "Student Area" : "Área do Aluno"}
        </Link>
        <Badge>{locale === "en" ? "Soon" : "Em Breve"}</Badge>
      </div>
      <Link
        href="https://www.sympla.com.br/eventos?s=computacao-amostra-xx"
        target="_blank"
      >
        {locale === "en" ? "Tickets" : "Ingressos"}
      </Link>
      <Link
        href="https://drive.google.com/drive/u/2/folders/1DkP687BP4TZV7zYQr9_l7bVGKr_awJUW"
        target="_blank"
      >
        {locale === "en" ? "Schedule" : "Programação"}
      </Link>

      {session.status === "authenticated" && (
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          {locale === "en" ? "Logout" : "Sair"}
        </Link>
      )}
    </div>
  );
}

const Menu = ({ data, status }: MenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || "en"
  );

  const { open, handleOpenChange, setOpen } = useMenu();
  const [block, setBlock] = useState<boolean>(false);

  useEffect(() => {
    if (open) setBlock(true);
  }, [open]);

  let uName: string = "";
  const urlToSolutions = `/${locale}/solutions`;
  const inSolutionPage = pathname.includes("solutions");

  if (data) {
    const names = data.user?.name?.split(" ") as string[];
    uName = names[0] + " " + names[names.length - 1];
  }

  const nameInitials = () => {
    if (data?.user?.name) {
      const names = data.user.name.trim().split(" ");

      if (names.length === 1) return names[0]!.substring(0, 2);

      const firstName = names[0] ?? "";
      const lastName = names[names.length - 1];

      if (firstName && lastName) {
        return `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`;
      }

      return firstName;
    }
  };

  return (
    <div className="absolute flex justify-end items-start w-full h-full inset-0 top-0 right-0">
      <button className="relative w-fit h-fit z-50" onClick={handleOpenChange}>
        <IoMenu
          size={46}
          className={cn(
            "absolute right-4 xs:right-[42px] md:right-[62px] top-9 transition-opacity duration-300",
            open && "opacity-0"
          )}
        />
        <IoCloseOutline
          size={46}
          className={cn(
            "absolute right-4 xs:right-[42px] md:right-[62px] top-9 transition-opacity duration-300",
            !open && "opacity-0"
          )}
        />
      </button>
      <div
        className={cn(
          "hidden fixed bg-black w-screen min-h-screen bg-transparent transition-colors duration-300 ease-in-out opacity-40 inset-0",
          open && "bg-black",
          block && "block"
        )}
        onClick={() => setOpen((currState) => currState && !currState)}
        onTransitionEnd={() => setBlock(false)}
      />
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 flex bg-black rounded-l-[30px] w-[364px] transition-transform duration-300 ease-in-out transform",
          open ? "translate-x-0 z-40" : "translate-x-full"
        )}
        tabIndex={open ? 0 : -1}
      >
        <div className="flex flex-col w-full h-full overflow-y-auto px-[55px] py-[78px] gap-10">
          <Image
            src={AmazonHacking}
            alt="Logo Amazon Hacking"
            onClick={() => {
              scrollTo("hero");
              handleOpenChange();
            }}
          />

          {!inSolutionPage && (
            <div className="flex flex-col gap-[18px] items-start justify-center w-full h-fit">
              <MenuTitle>Menu</MenuTitle>
              <Link
                onClick={() => {
                  scrollTo("about");
                  handleOpenChange();
                }}
              >
                {locale === "en" ? "The Program" : "O Programa"}
              </Link>
              <Link
                onClick={() => {
                  scrollTo("editions");
                  handleOpenChange();
                }}
              >
                {locale === "en" ? "Editions" : "Edições"}
              </Link>
              <Link
                onClick={() => {
                  scrollTo("winners");
                  handleOpenChange();
                }}
              >
                {locale === "en" ? "Winners" : "Vencedores"}
              </Link>
              <Link
                onClick={() => {
                  scrollTo("partners");
                  handleOpenChange();
                }}
              >
                {locale === "en" ? "Sponsors" : "Patrocinadores"}
              </Link>
            </div>
          )}

          {!inSolutionPage ? (
            <div className="flex flex-col gap-[18px] items-start justify-center w-full h-fit">
              <MenuTitle>{locale === "en" ? "Projects" : "Projetos"}</MenuTitle>
              <Button
                onClick={() => {
                  router.push(urlToSolutions);
                }}
                onMouseEnter={() => {
                  router.prefetch(urlToSolutions);
                }}
                onTouchStart={() => {
                  router.prefetch(urlToSolutions);
                }}
              >
                {locale === "en" ? "Solutions" : "Soluções"}
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-[18px] items-start justify-center w-full h-fit">
              <MenuTitle>{locale === "en" ? "Home" : "Home"}</MenuTitle>
              <Button
                onClick={() => {
                  router.push(`/${locale}/`);
                }}
                onMouseEnter={() => {
                  router.prefetch(`/${locale}/`);
                }}
                onTouchStart={() => {
                  router.prefetch(`/${locale}/`);
                }}
              >
                {locale === "en" ? "Return to main page" : "Voltar à página principal"}
              </Button>
            </div>
          )}

          <DesktopMenu />

          {status === "unauthenticated" && (
            <div className="flex flex-col gap-[18px] items-start justify-center w-full h-fit">
              <MenuTitle>Login</MenuTitle>
              <Button variant="secondary" onClick={() => signIn("google")}>
                {locale === "en" ? "Log in" : "Faça Login"}
              </Button>
            </div>
          )}

          {status === "authenticated" && (
            <div className="flex items-center justify-center gap-5 mt-auto self-start">
              <Avatar>
                <AvatarFallback>{nameInitials()}</AvatarFallback>
                <AvatarImage
                  src={data!.user?.image || ""}
                  alt="Imagem do perfil do usuário"
                />
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-[0.32px]">
                  {uName}
                </span>
                <span
                  title={data!.user?.email as string}
                  className="font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] sm:max-w-[22ch]"
                >
                  {data!.user?.email as string}
                </span>
              </div>
            </div>
          )}

          {/* {!data ? (
                        <div className='flex flex-col gap-[18px] items-start justify-center w-full h-fit'>
                            <MenuTitle>Login</MenuTitle>
                            <Button
                                variant='secondary'
                                onClick={() => signIn('google')}
                            >
                                {locale === 'en' ? 'Sign In' : 'Fazer Login'}
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col items-start justify-start gap-[18px]'>
                                <div className='flex gap-[10px] items-center justify-center'>
                                    <Link className='font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50'>
                                        {locale === 'en'
                                            ? 'Student Area'
                                            : 'Área do Aluno'}
                                    </Link>
                                    <Badge>
                                        {locale === 'en' ? 'Soon' : 'Em Breve'}
                                    </Badge>
                                </div>
                                <Link
                                    href='https://www.sympla.com.br/eventos?s=computacao-amostra-xx'
                                    target='_blank'
                                >
                                    {locale === 'en' ? 'Tickets' : 'Ingressos'}
                                </Link>
                                <Link
                                    href='https://drive.google.com/drive/u/2/folders/1DkP687BP4TZV7zYQr9_l7bVGKr_awJUW'
                                    target='_blank'
                                >
                                    {locale === 'en'
                                        ? 'Schedule'
                                        : 'Programação'}
                                </Link>
                                <Link
                                    href='/'
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signOut()
                                    }}
                                >
                                    {locale === 'en' ? 'Logout' : 'Sair'}
                                </Link>
                            </div>
                            <div className='flex items-center justify-center gap-5'>
                                <div className='w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0'>
                                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                                        <Image
                                            src={data.user?.image || ''}
                                            alt='Imagem do perfil do usuário'
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-base tracking-[0.32px]'>
                                        {uName}
                                    </span>
                                    <span
                                        title={data.user?.email as string}
                                        className='font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] xs:max-w-[30ch]'
                                    >
                                        {data.user?.email}
                                    </span>
                                </div>
                            </div>
                        </>
                    )} */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
