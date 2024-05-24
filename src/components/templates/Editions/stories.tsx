import React from 'react';
import { Meta } from '@storybook/react';
import Editions from '.';
import { NextIntlClientProvider } from 'next-intl';

export default {
  title: 'Components/templates/Editions',
  component: Editions,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale='pt'>
        <Story />
      </NextIntlClientProvider>
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

const Template = () => <Editions label='' mainText1='' mainText2='' retrospective='' retrospectiveText='' subtitle=''/>;

export const Default = Template.bind({});