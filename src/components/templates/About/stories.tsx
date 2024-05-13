import {Meta, StoryObj} from "@storybook/react"
import About from "."

export default {
    decorators: [
        (Story) => <div className="bg-purple-400"><div className="h-screen" /><Story /><div className="h-screen bg-purple-400 relative z-10"/></div>
    ],
    title: "Components/Templates/About",
    component: About,
} as Meta<typeof About>

export const Template: StoryObj = {}