import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
import MenuProvider from '@/contexts/menu'
import { MenuProps } from './types'

export default {
    title: 'Components/Molecules/Menu',
    component: Menu,

    decorators: [
        (Story) => (
            <MenuProvider>
                <div className='w-full min-h-[200vh] bg-gradient-to-b from-red-400 to-red-950'>
                    <Story />
                </div>
            </MenuProvider>
        )
    ],

    tags: ['autodocs']
} as Meta<MenuProps>

type Story = StoryObj<MenuProps>

export const Default: Story = {}