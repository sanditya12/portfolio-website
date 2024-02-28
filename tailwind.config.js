/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    colors: {
      dark: "#323643",
      light: "#F7F7F7",
      grey: "#606470",
      "light-grey": "#787D8C",
      orange: "#FF570C",
    },
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
