import {Meta, StoryObj} from "@storybook/react"
import Checkbox from "."
import CheckboxProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-full grid place-items-center py-8"><Story /></div>
    ],
    title: "Components/Atoms/Checkbox",
    component: Checkbox,
    tags: ['autodocs']
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
    args: {
        children: "Teste"
    }
}