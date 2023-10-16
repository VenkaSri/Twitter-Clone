/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      chirp: ["chirp", "sans-serif"],
      cHeavy: ["cHeavy", "sans-serif"],
      cBold: ["cBold", "sans-serif"],
    },
    extend: {
      fontSize: {
        15: "15px",
      },
      colors: {
        primary: "#1D9BF0",
      },
    },
  },
  plugins: [],
};
