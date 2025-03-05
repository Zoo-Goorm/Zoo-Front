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
      website: '1440px',
      tablet: '768px',
      mobile: '360px',
      lg: '1024px',
    },
    extend: {
      spacing,
    },
  },
} satisfies Config;
