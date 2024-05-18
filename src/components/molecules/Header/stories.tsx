import { Meta, StoryObj } from '@storybook/react'
import Header from '.'
import MenuProvider from '@/contexts/menu'
import { SessionProvider } from 'next-auth/react'

const meta: Meta = {
  title: 'Components/Molecules/Header',
  component: Header,

  decorators: [
    (Story) => (
      <SessionProvider>
        <MenuProvider>
          <Story />
        </MenuProvider>
      </SessionProvider>
    ),
  ],

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
