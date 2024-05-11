import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/[locale]/globals.css"
import { themes } from '@storybook/theming';
import { gilroy } from "../src/services/utils/fonts.utils"

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={gilroy.variable}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      theme: themes.dark
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
