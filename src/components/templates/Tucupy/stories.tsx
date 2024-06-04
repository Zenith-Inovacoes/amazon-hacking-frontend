import React from 'react';
import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react'
import Tucupy from '.'

export default {
  title: 'Components/Templates/Tucupy',
  component: Tucupy,

  tags: ['autodocs'],
} as Meta

const Template = () => <Tucupy />

export const Default = Template.bind({}) as StoryObj
