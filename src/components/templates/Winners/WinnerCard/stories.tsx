import { Meta, StoryObj } from '@storybook/react'
import WinnerCard from '.'
import { WinnerCardProps } from './types'

export default {
  title: 'Components/Templates/Winners/WinnerCard',
  component: WinnerCard,

  tags: ['autodocs'],
} as Meta<WinnerCardProps>

type Story = StoryObj<WinnerCardProps>

export const Default: Story = {}
