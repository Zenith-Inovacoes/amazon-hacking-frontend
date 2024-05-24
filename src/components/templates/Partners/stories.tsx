import Partners from ".";
import { StoryObj, Meta } from "@storybook/react"

export default {
    decorators: [
        (Story) => <div>
            <div className="h-screen grid place-items-center text-60 font-bold text-black text-center text-balance leading-62">
                Role a página para baixo para ver a animação
            </div>
            <Story />
            <div className="h-screen" />
        </div>
    ],
    title: "Components/Templates/Partners",
    component: Partners
} as Meta<typeof Partners>

type Story = StoryObj<typeof Partners>

export const Default: Story = {
}