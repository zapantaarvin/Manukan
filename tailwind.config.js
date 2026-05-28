/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moss: {
          50: '#f3f7f3',
          100: '#e1ebe1',
          200: '#c2d7c4',
          300: '#9bbc9f',
          400: '#6f9c75',
          500: '#4d7d54',
          600: '#386340',
          700: '#2c4f34',
          800: '#243f2b',
          900: '#1e3424',
        },
        clay: {
          50: '#faf7f2',
          100: '#f1ead9',
          200: '#e4d4b3',
          300: '#d3b884',
          400: '#bf9a5c',
          500: '#a87f44',
          600: '#8b6634',
          700: '#6d4f29',
          800: '#523c21',
          900: '#3d2d19',
        },
        ink: '#16201a',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(20, 40, 25, 0.25)',
      },
    },
  },
  plugins: [],
}
