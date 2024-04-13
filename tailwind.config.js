/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./layout/theme.liquid", "./templates/*.liquid", "./snippets/*.liquid", "./assets/scripts.js.liquid"],
  theme: {
    screens: {
      "2xs": "360px",
      "xs": "370px",
      ...defaultTheme.screens,
    },
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

