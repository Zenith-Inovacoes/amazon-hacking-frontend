import {Meta, StoryObj} from "@storybook/react"
import TermsCard from "."
import { TermsCardProps } from "./types"

export default {
    title: "TermsCard",
    component: TermsCard,
    args: {
        title: "Proident et exercitation enim elit minim id.",
        description: "Anim excepteur ad et sit nostrud ex laborum veniam pariatur nulla consectetur do nostrud consectetur. Est eiusmod laboris ipsum non aliquip consequat velit aute. Deserunt veniam enim ea aliquip do dolor culpa amet culpa laborum ad id dolor. Fugiat sit laboris dolor occaecat occaecat reprehenderit cupidatat nisi eiusmod aute mollit. Ullamco cillum id sit Lorem non commodo anim cillum ipsum. Laborum in proident aliquip eiusmod eu ex culpa dolore culpa ut eu sint tempor sunt. Magna consequat in aute sint consequat do eu."
    },
    decorators: [
        (Story) => <div className="w-full grid place-items-start py-8"><Story /></div>
    ]
} as Meta<TermsCardProps>

type Story = StoryObj<TermsCardProps>

export const Default: Story = {}