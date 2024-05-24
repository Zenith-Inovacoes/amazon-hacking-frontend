import {Meta, StoryObj} from "@storybook/react"
import Select, {SelectItem} from "."
import SelectProps from "./types"

export default {
    decorators: [
        (Story) => <div className="w-[300px] mx-auto py-8 grid place-items-center"><Story /></div>
    ],
    title: "Components/Atoms/Select",
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        placeholder: {
            description: "Default text when no value is selected."
        },
    },
    args: {
        placeholder: "Selecione um item",
        children: 
            <>
                <SelectItem value="teste1">Teste 1</SelectItem>
                <SelectItem value="teste2">Teste 2</SelectItem>
            </>
    }
} as Meta<SelectProps>

type Story = StoryObj<SelectProps>

export const Default: Story = {
}

export const Light: Story = {
    args: {
        variant: "light"
    }
}