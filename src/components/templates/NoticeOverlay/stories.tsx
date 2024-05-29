import { Meta, StoryObj } from "@storybook/react";
import NoticeOverlay from ".";
import { NextIntlClientProvider } from "next-intl";

const meta: Meta = {
    title: "Components/Templates/NoticeOverlay",
    component: NoticeOverlay,

    decorators: [
        (Story) => (
            <NextIntlClientProvider locale="pt"> <Story/> </NextIntlClientProvider>
        ),
    ],

    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj;

export const Default: Story = {};

