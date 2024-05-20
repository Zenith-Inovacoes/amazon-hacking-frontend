import { StoryObj } from '@storybook/react'
import ZenithOverlay from '.'

export default {
  title: 'Components/Templates/Zenith/ZenithOverlay',
  component: ZenithOverlay,

  args: {
    overlayTrigger: <button>Teste</button>,
  },
}

type Story = StoryObj

export const Default: Story = {}
