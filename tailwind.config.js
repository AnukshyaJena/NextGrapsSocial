module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
       pink: '0px 4px 4px rgba(255, 20, 147, 0.7)'
      },
    },
  },
  plugins: [ require('tailwindcss-textshadow'),],

};