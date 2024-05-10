import {Meta, StoryObj} from "@storybook/react"
import FooterButton from "."
import FooterButtonProps from "./types"

export default {
    title: "Components/Atoms/FooterButton",
    component: FooterButton,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div className="w-full grid py-8 place-items-center"><Story /></div>
    ]
} as Meta<FooterButtonProps>

type Story = StoryObj<FooterButtonProps>

export const Default: Story = {
    args: {
        children: "Teste"
    }
}