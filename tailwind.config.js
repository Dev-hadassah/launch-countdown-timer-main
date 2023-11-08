/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayishBlue: '#8486a9',
        softRed: '#fb6087',
        white: '#ffffff',
        darkDesaturatedBlue: '#343650',
        veryDarkBlue: '#1e1f29',
        veryDarkBlackBlue: ' #191a24'

      },
      fontFamily: {
        RedHatText: ['RedHatText', 'sans-serif']
      }
    }
  },
  plugins: [],
}


