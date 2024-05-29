import { Meta, StoryObj } from '@storybook/react'
import ODSBox from '.'
import { ODSBoxProps } from './types'

import ODS1 from 'public/ODSs/SDG-1 3.svg'

const meta: Meta<ODSBoxProps> = {
  decorators: [
    (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
],
  title: 'Components/Templates/ODSs/Components',
  component: ODSBox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ODSBoxProps>

export const Current: Story = {
  render: () => {
    return (
    <ODSBox image={ODS1} odsName='ODS1' url='https://brasil.un.org/pt-br/sdgs/1'/>
    )
  },
}


