import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import { colors, spacing } from './src/styles/tokens';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    screens: {
      website: '360px',
      mobile: '0px',
    },
    extend: {
      spacing,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-moz-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
} satisfies Config;
