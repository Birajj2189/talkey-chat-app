/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#FFC107 ',
        'secondary-color': '#675A8C',
        'accent-color1': '#ff00ff',
        'accent-color2': '#00ffff',
        'accent-color3': '#0097A7',
        'text-color': '#acf7ff',
        'background-color': '#FFFFFF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}