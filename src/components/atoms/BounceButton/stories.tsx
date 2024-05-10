import {Meta, StoryObj} from "@storybook/react"
import BounceButton from "."
import BounceButtonProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
    ],
    title: "Components/Atoms/BounceButton",
    component: BounceButton,
    tags: ["autodocs"]
} as Meta<BounceButtonProps>

type Story = StoryObj<BounceButtonProps>

export const Default: Story = {
    args: {
        children: "Explorar mais"
    }
}