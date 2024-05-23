import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      urbanist: ["Urbanist", "sans"],
      redHatText: ["Red Hat Text", "sans"],
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color) / <alpha-value>)",
        accent: "rgb(var(--accent-color) / <alpha-value>)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 10fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-9': 'span 9 / span 9',
      },
    },
  },
  plugins: [],
};
export default config;
