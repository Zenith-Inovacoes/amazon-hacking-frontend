import {Meta, StoryObj} from "@storybook/react"
import Footer from "."

export default {
    decorators: [
        (Story) => <div><div className="h-screen w-full"/><Story /></div>
    ],
    title: "Components/Templates/Footer",
    component: Footer
} as Meta<typeof Footer>

export const Template: StoryObj = {}