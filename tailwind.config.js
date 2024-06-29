/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{sans: ['Poppins', 'sans-serif']},
      colors:{
        'white': '#ffffff',
        'gray': '#878787',
        'black': '#101216',
        'black-card': '#191A23',
        'gray-hover' : '#ADADAD',
        'black-card-hover': '#22242E'

      }
    },
  },
  plugins: [],
}

