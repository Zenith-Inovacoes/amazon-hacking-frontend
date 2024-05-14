import React from 'react';
import { Meta } from '@storybook/react';
import Editions from '.';

export default {
  title: 'Components/templates/Editions',
  component: Editions,
  decorators: [
    (Story) => (
 
        <Story />
  
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A simple component to display when the page is not found.',
      },
    },
  },
} as Meta;

const Template = () => <Editions />;

export const Default = Template.bind({});