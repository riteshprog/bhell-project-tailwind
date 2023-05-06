/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBFDFE",
          100: "#F4F9FB",
          200: "#CFE6ED",
          300: "#A9D2E0",
          400: "#84BFD2",
          500: "#5EABC4",
          600: "#4094B0",
          700: "#32748A",
          800: "#255565",
          900: "#17353F",
          1000: "#0F2329",
          1100: "#569AB2",
          1200: "#383C43",
          1300: "#27596B",
          1400: "#96C0C8",
          1500: "#EAF5F5",
          1600: "#367A94",
        },
      },
    },
  },
  plugins: [],
};
