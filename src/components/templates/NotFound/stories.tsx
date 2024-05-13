import React from 'react';
import { Meta } from '@storybook/react';
import NotFound from './NotFound';

export default {
  title: 'Components/Templates/NotFound',
  component: NotFound,
  decorators: [
    (Story) => (
    //   <div className="w-full grid place-items-center py-8">
        <Story />
    //   </div>
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

const Template = () => <NotFound />;

export const Default = Template.bind({});
