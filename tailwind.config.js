/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#E5E5E5',
        'secondary-background': '#F5F5F5',
        'nav-blue': '#123262',
        'contact-blue': '#0046AF',
        'contact-gray': '#8D93A1',
        'secondary-text': '#727272',
        'footer-background': '#E5E5E5',
        'button-green': '#22C55E',
      },
      fontFamily: {
        inter: ['var(--Inter)'],
      },
      fontSize: {
        xxs: ['0.5rem', '0.75rem'],
      },
      padding: {
        1.5: '0.375rem',
      },
      height: {
        0.5: '0.125rem',
      },
      gap: {
        0.5: '0.125rem',
        1.5: '0.375rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
