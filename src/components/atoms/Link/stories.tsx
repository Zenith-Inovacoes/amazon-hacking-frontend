import { Meta, StoryObj } from "@storybook/react"
import Link from "."
import LinkProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
    ],
    title: "Components/Atoms/Link",
    component: Link,
    tags: ['autodocs'],
    argTypes: {
        target: {
            description: "Default anchor property. In the case of this component, if the target is equal to `_blank`, it will also display an icon next to the url text.",
        }
    }
} as Meta<LinkProps>

type Story = StoryObj<LinkProps>

export const Default: Story = {
    args: {
        href: "https://zenithinova.com.br",
        children: "Explore mais o universo da Zenith"
    }
}

export const WithTargetBlank: Story = {
    args: {
        href: "https://zenithinova.com.br",
        target: "_blank",
        children: "Lorem ipsum",
    }
}