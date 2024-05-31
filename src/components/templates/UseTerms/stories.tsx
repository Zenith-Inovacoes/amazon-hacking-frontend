import { Meta, StoryObj } from '@storybook/react'
import UseTerms from '.'
import Contacts from '@/components/molecules/Contacts'
import Footer from '../Footer'

export default {
    title: 'Components/Templates/UseTerms',
    component: UseTerms,

    decorators: [
        (Story) => (
            <>
                <Story />
                <Contacts />
            </>
        ),
    ],
} as Meta

type Story = StoryObj

export const Default: Story = {}
