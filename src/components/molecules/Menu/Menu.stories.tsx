import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
import { Suspense } from 'react'

const meta: Meta = {
  title: 'Components/Molecules/Menu',
  component: Menu,

  decorators: [
    (Story) => (
      <div className='w-full h-full items-center justify-center flex'>
        <Suspense fallback={<div>Loading...</div>}>
          <Story />
        </Suspense>
      </div>
    ),
  ],

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
