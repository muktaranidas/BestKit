/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#008AFF",
      black: "#222D39",
      white: "#FFFFFF",
      gray: "#8492A7",
      bgColor: "#F7F9FC",
      bgWhite: "#E5E5E5",
    },
  },
  plugins: [require("daisyui")],
};
