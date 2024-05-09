import { Meta, StoryObj } from "@storybook/react"
import FloatingButton from "."
import FloatingButtonProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
    ],
    title: "Components/Atoms/FloatingButton",
    component: FloatingButton,
    tags: ['autodocs']
} as Meta<FloatingButtonProps>

type Story = StoryObj<FloatingButtonProps>

export const Default: Story = {
    args: {
        href: "https://zenithinova.com.br",
        target: "_blank"
    }
}