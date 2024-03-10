/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'wave-white-pattern': "url('./public/background-white.svg')",
      },
    },
  },
  plugins: [],
};
