import { Meta, StoryObj } from "@storybook/react"
import LanguageSwitcher from "."
import LanguageSwitcherProps from "./types"

export default {
    decorators: [
        (Story) => (
            <div className="w-[300px] mx-auto py-8 grid place-items-center"><Story /></div>
        )
    ],
    title: "Components/Atoms/LanguageSwitcher",
    component: LanguageSwitcher,
    tags: ['autodocs']
} as Meta<LanguageSwitcherProps>

type Story = StoryObj<LanguageSwitcherProps>

export const Default: Story = {

}