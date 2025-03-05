import type { Config } from 'tailwindcss';
import { colors } from './src/styles/tokens';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    extend: {
    },
  },
} satisfies Config;
