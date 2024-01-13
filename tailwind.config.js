/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8F659A',
        secondary: '#EF8767',
        tertiary: '#120216',
        highlight: '#F7F4F7',
        background: '#120216',
      },
    },
  },
  plugins: [],
};
