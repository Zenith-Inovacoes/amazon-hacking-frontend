import type { Config } from 'tailwindcss'
import { screens } from 'tailwindcss/defaultTheme'
import light from './src/styles/themes/light'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    // '**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      ...screens,
    },

    extend: {
      screens: { xs: '23.376rem' },
      colors: light.colors,
      fontFamily: light.fontFamilies,
      fontSize: light.fontSizes,
      lineHeight: light.lineHeights,
      transitionProperty: {
        maxWidth: 'max-width',
      },
      backgroundImage: {
        'editionsMobileWave': "url('/waveMobileEditions.svg')",
        'tribalDecorator': "url('/symbol.svg')"
      },
      boxShadow: {
        languageSwitcher:
          '0px 144px 40px 0px rgba(0, 0, 0, 0.01), 0px 92px 37px 0px rgba(0, 0, 0, 0.06), 0px 52px 31px 0px rgba(0, 0, 0, 0.20), 0px 23px 23px 0px rgba(0, 0, 0, 0.34), 0px 6px 13px 0px rgba(0, 0, 0, 0.39)',
        floatingButton:
          '0px 75px 21px 0px rgba(0, 0, 0, 0.01), 0px 48px 19px 0px rgba(0, 0, 0, 0.06), 0px 27px 16px 0px rgba(0, 0, 0, 0.20), 0px 12px 12px 0px rgba(0, 0, 0, 0.34), 0px 3px 7px 0px rgba(0, 0, 0, 0.39)',
      },
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
        menuOpen: {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        menuClose: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 400ms ease-out',
        dialogHide: 'dialogHide 600ms ease-out',
        menuOpen: 'menuOpen 200ms ease-in-out',
        menuClose: 'menuClose 200ms ease-in-out',
        menuOverlayShow: 'overlayShow 200ms ease-in-out',
        menuOverlayHide: 'overlayHide 200ms ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
