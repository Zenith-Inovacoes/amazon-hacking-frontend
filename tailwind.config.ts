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
      transitionProperty: {
        maxWidth: "max-width"
      },
      boxShadow: {
        languageSwitcher: "0px 144px 40px 0px rgba(0, 0, 0, 0.01), 0px 92px 37px 0px rgba(0, 0, 0, 0.06), 0px 52px 31px 0px rgba(0, 0, 0, 0.20), 0px 23px 23px 0px rgba(0, 0, 0, 0.34), 0px 6px 13px 0px rgba(0, 0, 0, 0.39)"
      }
    },
  },
  plugins: [],
};
export default config;
