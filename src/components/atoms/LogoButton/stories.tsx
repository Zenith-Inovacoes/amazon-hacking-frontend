import {Meta, StoryObj} from "@storybook/react"
import LogoButton from "."
import LogoButtonProps from "./types"

export default {
    title: "Components/Atoms/LogoButton",
    component: LogoButton
} as Meta<LogoButtonProps>

type Story = StoryObj<LogoButtonProps>

export const Default: Story = {}