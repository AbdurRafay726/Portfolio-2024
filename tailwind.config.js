/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "410px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        rubik: ["Rubik"],
        pacifico: ["Pacifico"],
      },
      colors: {
        mainGreen: "#86efac",
        greenHover: "#bbf7d0",
        mainGray: "#334155",
      },
    },
  },
  plugins: [],
};
