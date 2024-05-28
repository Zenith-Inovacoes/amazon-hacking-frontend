import { Meta, StoryObj } from '@storybook/react'
import HeaderContent from '.'
import MenuProvider from '@/contexts/menu'
import { SessionProvider } from 'next-auth/react'

const meta: Meta = {
    title: 'Components/Molecules/Header',
    component: HeaderContent,

    decorators: [
        (Story) => (
            <MenuProvider>
                <div className='relative h-[500vh] bg-gradient-to-b from-green-500 to-secondary-400'>
                    <Story />
                </div>
            </MenuProvider>
        ),
    ],

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
