import {Meta, StoryObj} from "@storybook/react"
import LogoButton from "."
import LogoButtonProps from "./types"

export default {
    title: "Components/Atoms/LogoButton",
    component: LogoButton,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
    ]
} as Meta<LogoButtonProps>

type Story = StoryObj<LogoButtonProps>

export const Default: Story = {}