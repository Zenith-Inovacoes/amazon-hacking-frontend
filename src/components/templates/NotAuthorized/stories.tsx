import React from 'react';
import { Meta } from '@storybook/react';
import NotAuthorized from '.';

export default {
  title: 'Components/Templates/NotAuthorized',
  component: NotAuthorized,
  parameters: {
    docs: {
      description: {
        component: 'A simple component to display when access is not authorized.',
      },
    },
  },
} as Meta;

const Template = () => <NotAuthorized />;

export const Default = Template.bind({});
