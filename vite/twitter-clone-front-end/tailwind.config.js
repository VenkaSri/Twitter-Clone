/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
    },
    fontFamily: {
      chirp: ["chirp", "sans-serif"],
      cHeavy: ["cHeavy", "sans-serif"],
      cBold: ["cBold", "sans-serif"],
      cR: ["chripR", "sans-serif"],
    },
    extend: {
      fontSize: {
        15: "15px",
        17: "17px",
        40: "40px",
        64: "64px",
      },
      colors: {
        primary: "#1D9BF0",
      },
    },
  },
  plugins: [],
};
