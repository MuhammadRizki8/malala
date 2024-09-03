/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
