/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    colors: {
      "color-primary": "#503E9D",
      "color-secondary": "#FFD974",
      "color-button": "#6F52ED",
      gray: "#CECECE",
      red: "#ED5454",
      green: "#57D89F",
      black: "#000000",
      white: "#FFFFFF",
      "text-gray": "#767189",
      "color-button-hover": "#8C78E6",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#503E9D",
      },
    },
  },
  plugins: [],
};
