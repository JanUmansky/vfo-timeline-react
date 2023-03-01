/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '16/9': '56.25%',
        '1/1' : '100%',
        '1/2' : '200%'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
