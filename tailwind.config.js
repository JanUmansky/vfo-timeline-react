/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "30%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0"}
        }
      },
      animation: {
        fade: "fade 1.5s ease-in-out"
      },
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
