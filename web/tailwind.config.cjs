/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/ui/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    fontFamily: {
      display: ['"Outfit"']
    },
    extend: {
      screens: {
        xs: '425px',
        xss: '375px'
      },
      colors: {
        'light-blue': '#31C3BD',
        'light-blue-hover': '#65E9E4',
        'light-yellow': '#F2B137',
        'light-yellow-hover': '#FFC860',
        'dark-navy': '#1A2A33',
        'semi-dark-navy': '#1F3641',
        silver: '#A8BFC9',
        'silver-hover': '#DBE8ED',
        'silver-darker': '#647A85'
      },
      boxShadow: {
        'inset-card': 'inset 0px -8px 0px #10212A',
        'inset-card-tiny': 'inset 0px -4px 0px #10212A;',
        'inset-primary-button': 'inset 0px -8px 0px #CC8B13;',
        'inset-primary-button-tiny': 'inset 0px -4px 0px #CC8B13;',
        'inset-secondary-button': 'inset 0px -8px 0px #118C87;',
        'inset-neutral-button': 'inset 0px -4px 0px #6B8997;'
      }
    }
  },
  plugins: []
};
