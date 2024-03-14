/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
      ,
      colors: {
     
      },

      screens: {
        'mobile': '340px',  
        'tablet': '568px',
        'laptop': '924px',
        'desktop': '1280px',
      },
    

    },
  },
  plugins: [],
}