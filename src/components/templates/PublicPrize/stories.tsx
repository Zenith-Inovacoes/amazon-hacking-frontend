import { Meta, StoryObj } from "@storybook/react"
import PublicPrize from "."

export default {
    title: "Components/Templates/PublicPrize",
    component: PublicPrize,
    decorators: [
        (Story) => <div>
            <div className="h-screen bg-white"/>
            <Story />
            <div className="bg-white h-screen"/>
        </div>
    ]
} as Meta<typeof PublicPrize>

export const Template: StoryObj = {}