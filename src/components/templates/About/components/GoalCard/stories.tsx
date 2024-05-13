import {Meta, StoryObj} from "@storybook/react"
import GoalCard from "."
import { GoalCardProps } from "./types"
import FacebookImage from "public/icons/facebook.svg"

export default {
    decorators: [
        (Story) => <div className="mx-auto w-fit max-w-screen-md"><Story /></div>
    ],
    title: "Components/Templates/About/Components/GoalCard",
    component: GoalCard,
    args: {
        children: "Non iqua occaecat commodo. Est id ex culpa veniam cupidatat consequat. Tempor tempor eiusmod consequat excepteur do commodo laboris. Duis ipsum voluptate Lorem id magna.",
        title: "Nisi veniam quis consequat duis amet occaecat dolor.",
        image: FacebookImage,
        altImage: "Imagem do Facebook"
    }
} as Meta<GoalCardProps>

type Story = StoryObj<GoalCardProps>

export const Default: Story = {}