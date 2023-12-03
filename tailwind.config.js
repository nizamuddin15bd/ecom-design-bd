/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       colors: {
        'red-regular': '#E73C17',
        'background-color':'#F2F4F5',
      },
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
}

