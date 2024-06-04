import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms";
import { AccountMenuProps } from "./types";
import { LuHome, LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { locales } from "@/services/utils/locale.utils";
import { usePathname, useRouter } from "next/navigation";
import { IoOpenOutline } from "react-icons/io5";

export function AccountMenu({ user }: AccountMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || "en"
  );

  const nameInitials = () => {
    const names = user.name.trim().split(" ");

    if (names.length === 1) return names[0]!.substring(0, 2);

    const firstName = names[0] ?? "";
    const lastName = names[names.length - 1];

    if (firstName && lastName) {
      return `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`;
    }

    return firstName;
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <DropdownMenu className="hidden lg:flex">
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="rounded-full p-0">
          <Avatar>
            <AvatarFallback>{nameInitials()}</AvatarFallback>
            <AvatarImage
              src={user.image || ""}
              alt={`Foto de perfil de ${user.name}`}
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 ">
        <DropdownMenuLabel className="flex flex-col">
          <span className="truncate text-gray-950">{user?.name}</span>
          <span className="text-xs font-normal truncate text-gray-500">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            router.push(`/${locale}/`);
          }}
          onMouseEnter={() => {
            router.prefetch(`/${locale}/`);
          }}
          onTouchStart={() => {
            router.prefetch(`/${locale}/`);
          }}
          className="text-primary-100"
        >
          <LuHome className="mr-2 h-4 w-4" />
          {locale === "Return to main page" ? "" : "Voltar à página principal"}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IoOpenOutline className="mr-2 h-4 w-4" />
          <a href="https://ecosphere.mawatech.com.br/" target="_blank">
            {locale === "Student Area" ? "" : "Área do Aluno"}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoOpenOutline className="mr-2 h-4 w-4" />
          <a
            href="https://www.sympla.com.br/eventos?s=computacao-amostra-xx"
            target="_blank"
          >
            {locale === "Tickets" ? "" : "Ingressos"}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoOpenOutline className="mr-2 h-4 w-4" />
          <a
            href="https://drive.google.com/drive/u/2/folders/1DkP687BP4TZV7zYQr9_l7bVGKr_awJUW"
            target="_blank"
          >
            {locale === "en" ? "Schedule" : "Programação"}
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-rose-500"
          onClick={() => handleLogout()}
        >
          <LuLogOut className="mr-2 h-4 w-4" />
          <span>{locale === "en" ? "Logout" : "Sair"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
