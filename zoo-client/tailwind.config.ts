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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(145deg, #000127 0%, #000235 100%)',
        'insights-overlay':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(246, 246, 246, 0.90) 19%, #FFF 100%)',
      },
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
