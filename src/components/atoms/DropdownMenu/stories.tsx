import { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from ".";
import Button from "../Button";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { LuHome, LuLogOut } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";

const meta: Meta = {
  title: "Components/Atoms/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="rounded-full p-0">
            <Avatar>
              <AvatarFallback>TK</AvatarFallback>
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 ">
          <DropdownMenuLabel className="flex flex-col">
            <span className="truncate text-gray-950">Tim Cook</span>
            <span className="text-xs font-normal truncate text-gray-500">
              timcook@apple.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-primary-100">
            <LuHome className="mr-2 h-4 w-4" />
            Voltar à página principal
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <IoOpenOutline className="mr-2 h-4 w-4" />
            <a href="https://ecosphere.mawatech.com.br/" target="_blank">
              Área do Aluno
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IoOpenOutline className="mr-2 h-4 w-4" />
            <a
              href="https://www.sympla.com.br/eventos?s=computacao-amostra-xx"
              target="_blank"
            >
              Ingressos
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IoOpenOutline className="mr-2 h-4 w-4" />
            <a
              href="https://drive.google.com/drive/u/2/folders/1DkP687BP4TZV7zYQr9_l7bVGKr_awJUW"
              target="_blank"
            >
              Programação
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-rose-500">
            <LuLogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
