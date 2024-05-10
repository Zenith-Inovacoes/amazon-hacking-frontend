import type { Config } from "tailwindcss";
import light from "./src/styles/themes/light";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    // '**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: light.colors,
      fontFamily: light.fontFamilies,
      fontSize: light.fontSizes,
      lineHeight: light.lineHeights,
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        overlayHide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        contentShow: {
          from: {
            opacity: '0',
            top: '100%',
          },
          to: { opacity: '1', top: '80px' },
        },
        dialogHide: {
          from: {
            opacity: '1',
            top: '80px',
          },
          to: {
            opacity: '0',
            top: '100%',
          },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 400ms ease-out',
        dialogHide: 'dialogHide 600ms ease-out',
      },
    },
    boxShadow: {
      floatingButton: "0px 75px 21px 0px rgba(0, 0, 0, 0.01), 0px 48px 19px 0px rgba(0, 0, 0, 0.06), 0px 27px 16px 0px rgba(0, 0, 0, 0.20), 0px 12px 12px 0px rgba(0, 0, 0, 0.34), 0px 3px 7px 0px rgba(0, 0, 0, 0.39)"
    }
  },
  plugins: [],
};
export default config;
