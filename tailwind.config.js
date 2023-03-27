/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#E5E5E5',
        'nav-blue': '#123262',
        'secondary-text': '#727272',
      },
      fontFamily: {
        inter: ['var(--Inter)'],
      },
      padding: {
        1.5: '0.375rem',
      },
    },
  },
};
