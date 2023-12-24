/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "500px",
      sm: "500px",
      tablet: "1265px",
    },
    fontFamily: {
      chirp: ["chirp", "sans-serif"],
      cHeavy: ["cHeavy", "sans-serif"],
      cBold: ["cBold", "sans-serif"],
      cR: ["chripR", "sans-serif"],
    },
    extend: {
      padding: {
        "pb-33": "33.3333%", // This creates a `pb-33` utility class
      },
      fontSize: {
        15: "15px",
        17: "17px",
        40: "40px",
        64: "64px",
      },
      colors: {
        primary: "#1D9BF0",
      },
      boxShadow: {
        "dialog-footer":
          "rgba(101, 119, 134, 0.30) 0px 0px 12px, rgba(101, 119, 134, 0.50) 0px 1px 3px 1px",
        "edit-media-shadow": "rgba(230, 236, 240, 0.7) 0px 0px 0px 9999px",
        "sidebar-nav-post-button": "rgba(0, 0, 0, 0.08) 0px 8px 28px",
        "account-hover-card":
          "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
      },
    },
  },
  plugins: [],
};
