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
    children: <div className="text-6xl flex justify-center font-bold pt-32 text-black h-full"><span className='absolute bottom-0 left-1/2 text-xs -translate-x-1/2'>End of the page</span>Teste<div className='h-screen'/></div>,
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
