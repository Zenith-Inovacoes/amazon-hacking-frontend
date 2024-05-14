import React from 'react';
import { Meta } from '@storybook/react';
import NotFound from './NotFound';

export default {
  title: 'Components/Templates/NotFound',
  component: NotFound,
  parameters: {
    docs: {
      description: {
        component: 'A simple component to display when the page is not found.',
      },
    },
  },
} as Meta;

const Template = () => <NotFound />;

export const Default = Template.bind({});
