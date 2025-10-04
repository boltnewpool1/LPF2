/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1929',
          800: '#132F4C',
          700: '#1A3F5C',
          600: '#234F6C',
        },
        cyan: {
          400: '#00D4FF',
          500: '#00B8D9',
          600: '#0097A7',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
