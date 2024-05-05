import { Meta, StoryObj } from '@storybook/react'
import { OverlayContent, Overlay, OverlayTrigger } from '.'
import { OverlayContentProps } from './types'

export default {
  title: 'Components/Atoms/Overlay',
  component: OverlayContent,
  decorators: [
    (Story) => {
      return (
        <div className='w-full py-8 grid place-items-center'>
          <Overlay>
            <OverlayTrigger className='bg-purple-500 rounded-xl py-2 px-4 hover:bg-purple-600 active:bg-purple-700 transition-colors'>Open Overlay</OverlayTrigger>
            <Story />
          </Overlay>
        </div>
      )
    },
  ],
  args: {
    children: <div className="text-6xl font-bold pt-32 text-black">Teste</div>,
  },
  argTypes: {
    children: {
        table: {
            disable: true,
        }
    },
    theme: {
        options: ['light', 'dark'],
        type: "string",
        control: {
            type: "radio"
        },
        table: {
            defaultValue: {
                summary: 'light',
            }
        }
    }
  },
  tags: ['autodocs'],
} as Meta<OverlayContentProps>

type Story = StoryObj<OverlayContentProps>

export const Default: Story = {}
