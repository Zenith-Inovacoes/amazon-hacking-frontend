import {Meta, StoryObj} from "@storybook/react"
import NumberCard from "."
import { NumberCardProps } from "./types"
import FacebookImage from "public/icons/facebook.svg"

export default {
    decorators: [
        (Story) => <div className="w-full mx-auto py-8 max-w-screen-md">
            <Story />
        </div>
    ],
    title: "Components/Templates/About/Components/NumberCard",
    component: NumberCard,
    args: {
        title: "Alunos",
        image: FacebookImage,
        altImage: "Imagem do Facebook",
        number: 24
    }
} as Meta<NumberCardProps>

type Story = StoryObj<NumberCardProps>

export const Default: Story = {
    decorators: [
        (Story) => <div>
            <div />
            <Story />
            <div />
        </div>
    ]
}

export const First: Story =  {
    decorators: [
        (Story) => <div>
        <Story />
            <div />
        </div>
    ],
}

export const Last: Story =  {
    decorators: [
        (Story) => <div>
            <div />
            <Story />
        </div>
    ],
}