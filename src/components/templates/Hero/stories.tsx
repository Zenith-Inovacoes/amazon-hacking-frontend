import {Meta, StoryObj} from "@storybook/react"
import Hero from "."

export default {
    decorators: [
        (Story) => <div><Story /><div className="h-screen bg-white"/></div>
    ],
    title: "Components/Templates/Hero",
    component: Hero
} as Meta<typeof Hero>

export const Template: StoryObj = {}