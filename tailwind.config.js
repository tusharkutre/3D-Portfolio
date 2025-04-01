/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: { 
      colors: {
        primary: "#050816", // primary color
        secondary: "#aaa6c3", // secondary color
        tertiary: "#151030", // tertiary color
        "black-100": "#100d25", // black-100 color
        "black-200": "#090325", // black-200 color
        "white-100": "#f3f3f3", // white-100 color
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // card shadow
      },
      screens: {
        xs: "450px", //custom breakpoint for mobile devices
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')", // hero background image from assets folder
      },
    },
  },
  plugins: [],
};