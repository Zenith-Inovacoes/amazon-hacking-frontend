import {Meta, StoryObj} from "@storybook/react"
import SocialMediaButton from "."
import { SocialMediaButtonProps } from "./types"
import Image from "next/image"

// Icons
import InstagramIcon from 'public/icons/instagram.svg'
import InstagramFillIcon from "public/icons/instagram-fill.svg"
import FacebookIcon from "public/icons/facebook.svg"
import YoutubeIcon from "public/icons/youtube.svg"
import LinkedinIcon from "public/icons/linkedin.svg"
import WhatsappIcon from "public/icons/whatsapp.svg"

export default {
    decorators: [
        (Story) => <div className="w-full grid place-items-center py-8"><Story /></div>
    ],
    title: "Components/Atoms/SocialMediaButton",
    component: SocialMediaButton,
    tags: ['autodocs'],
    args: {
        target: "_blank",
        href: "https://zenithinova.com.br",
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<SocialMediaButtonProps>

type Story = StoryObj<SocialMediaButtonProps>

export const Instagram: Story = {
    args: {
        children: <Image src={InstagramIcon} alt="Instagram"/>,
    }
}

export const InstagramFill: Story = {
    args: {
        children: <Image src={InstagramFillIcon} alt="Instagram"/>,
        variant: "fill"
    }
}

export const Facebook: Story = {
    args: {
        children: <Image src={FacebookIcon} alt="Facebook"/>,
        variant: "fill"
    }
}

export const Youtube: Story = {
    args: {
        children: <Image src={YoutubeIcon} alt="Youtube"/>,
        variant: "fill"
    }
}

export const Linkedin: Story = {
    args: {
        children: <Image src={LinkedinIcon} alt="Linkedin"/>,
    }
}

export const Whatsapp: Story = {
    args: {
        children: <Image src={WhatsappIcon} alt="Whatsapp"/>,
    }
}