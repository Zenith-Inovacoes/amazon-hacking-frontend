import { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

const meta: Meta = {
  title: 'Components/Atoms/Badge',
  component: Badge,

  decorators: [
    (Story) => (
      <div className='font-primary'>
        <Badge />
      </div>
    ),
  ],

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
