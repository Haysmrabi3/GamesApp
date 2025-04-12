/** @type {import('tailwindcss').Config} */






export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        main: '#6E26A5' , 
        text : `#9ca3af` ,
        section : '#110840' ,
        section2 : `#0E0B22`,
        section3 : `#0F092D`
      } , 
      screens : {
        sm: '360px'
      }, 
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}