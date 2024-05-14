import { Meta, StoryObj } from "@storybook/react"
import Separator from "."
import { SeparatorProps } from "./types"

export default {
    decorators: [
        (Story) => {
            return (
                <div className="py-8">
                    <Story />
                </div>
            )
        }
    ],
    title: "Components/Atoms/Separator",
    component: Separator,
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            description: "Orientation of the separator. <br /> <p style='font-size: 10px; font-style: italic;'> Obs.: When selecting vertical, you must define a fixed height to the parent element </p>",
            type: "string",
            control: {
                type: "radio",
            },
            table: {
                defaultValue: {
                    summary: "horizontal"
                }
            },
            options: ["horizontal", "vertical"]
        }
    }
} as Meta<SeparatorProps>

type Story = StoryObj<SeparatorProps>

export const Default: Story = {
    decorators: [
        (Story) => {
            return (
                <div className="flex flex-col gap-5 items-center justify-center w-36 mx-auto">
                    <h1>Teste da Silva</h1>
                    <Story />
                    <h2>12345</h2>
                </div>
            )
        }
    ]
}

export const Vertical: Story = {
    decorators: [
        (Story) => {
            return (
                <div className="flex gap-5 h-6 items-center justify-center w-52 mx-auto">
                    <h1>Teste da Silva</h1>
                    <Story />
                    <h2>12345</h2>
                </div>
            )
        }
    ],
    args: {
        orientation: "vertical"
    }
}