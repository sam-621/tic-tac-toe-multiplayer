/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/ui/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    fontFamily: {
      display: ['"Outfit"']
    },
    extend: {
      colors: {
        'light-blue': '#31C3BD',
        'light-blue-hover': '#65E9E4',
        'light-yellow': '#F2B137',
        'light-yellow-hover': '#FFC860',
        'dark-navy': '#1A2A33',
        'semi-dark-navy': '#1F3641',
        silver: '#A8BFC9',
        'silver-hover': '#DBE8ED'
      }
    }
  },
  plugins: []
};
