import { Meta, StoryObj } from "@storybook/react"
import Button from "."
import { ButtonProps, ButtonVariants } from "./types"
import { MdClose } from "react-icons/md";

export default {
    decorators: [
        (Story) => <div className="w-full grid place-items-center py-8"><Story /></div>
    ],
    title: "Components/Atoms/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: "string",
            options: ["primary", "secondary", "icon", "link"],
            control: {
                type: "select",
            },
            table: {
                defaultValue: {
                    summary: "primary"
                }
            }
        },
        theme: {
            description: "Only available when variant is type icon",
            options: ['light', 'dark'],
            control: {
                type: "select",
            },
            type: "string",
            table: {
                defaultValue: {
                    summary: "light"
                }
            },
            if: {
                arg: "variant",
                eq: "icon"
            }
        },
        asChild: {
            description: "Merges its props onto its immediate child.",
            table: {
                defaultValue: {
                    summary: "false"
                },
            },
            control: {
                type: "boolean"
            },
            type: "boolean",
        }
    }
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: {
        children: 'Lorem ipsum'
    }
}

export const Secondary: Story = {
    args: {
        children: "Lorem ipsum",
        variant: "secondary"
    }
}

export const Link: Story = {
    args: {
        children: "Lorem ipsum",
        variant: "link"
    }
}

export const IconDefault: Story = {
    args: {
        children: <MdClose />,
        variant: "icon"
    }
}

export const IconDark: Story = {
    args: {
        children: <MdClose />,
        variant: 'icon',
        theme: "dark"
    }
}

export const AsChild: Story = {
    args: {
        variant: "link",
        asChild: true,
        children: <a target="_blank" href="https://zenithinova.com.br">Lorem ipsum</a>
    }
}