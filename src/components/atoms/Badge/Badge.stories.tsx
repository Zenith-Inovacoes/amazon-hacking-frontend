import { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

const meta: Meta = {
  title: 'Components/Atoms/Badge',
  component: Badge,

  args: {
    children: 'Em Breve',
  },

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Default: Story = {}
