/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "serif"],
      },
      colors: {
        cyan: "#5fb4a2",
        darkBlue: "#203a4c",
        grayishDarkBlue: "#33323d",
        veryLightGrey: "#fafafa",
        lightGrey: "#eaeaeb",
        brightRed: "#f43030",
      },
    },
  },
  plugins: [],
};
