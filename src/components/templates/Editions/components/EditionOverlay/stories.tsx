import React from 'react';
import { Meta } from '@storybook/react';
import EditionOverlay from '.';
import { NextIntlClientProvider } from 'next-intl';
import art2022 from 'public/FlatArt2022.svg'

export default {
  title: 'Components/Templates/Editions/Components/EditionOverlay',
  component: EditionOverlay,
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

const Template = () => <EditionOverlay edition='2022' image={art2022} />;

export const Default = Template.bind({});