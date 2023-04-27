/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#008AFF",
      black: "#222D39",
      white: "#FFFFFF",
      // grayText: "#ADB7C2",
      // bgColor: "#F0F9FE",
      // lightBorder: "#DEE7EE",
    },
  },
  plugins: [require("daisyui")],
};
