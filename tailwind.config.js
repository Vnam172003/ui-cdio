/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          color_bg: "#39AD7C",
          color_text: "#6c7b88",
        },
      },
      fontFamily: {
        text: ["Montserrat", "sans - serif"],
      },
    },
  },
  plugins: [],
};
