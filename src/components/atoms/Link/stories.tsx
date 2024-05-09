import { Meta, StoryObj } from "@storybook/react"
import Link from "."
import LinkProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
    ],
    title: "Components/Atoms/Link",
    component: Link,
    tags: ['autodocs']
} as Meta<LinkProps>

type Story = StoryObj<LinkProps>

export const Default: Story = {
    args: {
        href: "https://zenithinova.com.br",
        target: "_blank",
        children: "Explore mais o universo da Zenith"
    }
}