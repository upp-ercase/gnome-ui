/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem',
        2.5: '0.625rem',
        4.5: '1.125rem',
        7.5: '1.875rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        18: '4.5rem',
        19.5: '4.875rem',
        26: '6.5rem',
        39: '9.75rem',
        42: '10.5rem',
        63: '15.75rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('inverse', '.inverse &');
    }),
  ],
};
