/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./img/**/*"],
  theme: {
    extend: {
      height: {
        '26': '9rem',
      },
      boxShadow: {
        '3xl' : '3px 0 3px black',
      }
    },
  },
  plugins: [],
}