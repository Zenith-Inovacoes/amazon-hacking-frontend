import React from 'react';
import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react'
import Solutions from '.'

export default {
  title: 'Components/Templates/Solutions',
  component: Solutions,
  tags: ['autodocs'],
} as Meta

const Template = () => <Solutions />

export const Default = Template.bind({}) as StoryObj
