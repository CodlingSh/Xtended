/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/theme.liquid", "./templates/*.liquid", "./snippets/*.liquid", "./assets/scripts.js.liquid"],
  theme: {
    extend: {
      colors: {
        "black": "#121212",
        "dark-grey": "#373939",
        "light-grey": "#858585",
        "green": "#00FF00" 
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif']
      }
    },
  },
  plugins: [],
}

