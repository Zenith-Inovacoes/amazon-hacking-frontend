import {Meta, StoryObj} from "@storybook/react"
import WinnerCard from "."
import { WinnerCardProps } from "./types"

export default {
    decorators: [
        (Story) => <div className="py-8"><Story /></div>  
    ],
    title: "Components/Templates/PublicPrize/Components/WinnerCard",
    component: WinnerCard,
    tags: ['autodocs'],
    args: {
        id: "1234",
        name: "Zenith Inova",
        description: "Fugiat Lorem non exercitation ullamco commodo cillum proident duis et irure qui et laborum cillum. Incididunt consectetur non aliquip aliqua do. Non cupidatat cupidatat sint do mollit sit. Et labore magna proident nisi laborum laboris fugiat. Eiusmod velit nisi cupidatat ut mollit duis quis officia sit qui deserunt.",
        team: ['Rian Ernesto', "Gabriel Marcelino", "Matheus Dourado", "Marco Antonio", "Renan Andrew"],
        logoUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        links: {
            youtube: {
                en: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L",
                pt: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L"
            },
            github: ""
        }
    }
} as Meta<WinnerCardProps>

type Story = StoryObj

export const Default: Story = {}