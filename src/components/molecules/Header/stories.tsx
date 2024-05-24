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
          <div className='relative h-[500vh] bg-gradient-to-b from-green-500 to-secondary-400'>
            <Story />
          </div>
        </MenuProvider>
      </SessionProvider>
    ),
  ],

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
