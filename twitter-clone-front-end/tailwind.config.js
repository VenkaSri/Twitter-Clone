/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["public/**", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "500px",
      tablet: "1265px",
    },
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
      cReg: ["Chrip Regular", "sans-serif"],
      cMed: ["Chrip Medium", "sans-serif"],
      cBold: ["Chirp Bold", "sans-serif"],
      cHeavy: ["Chirp Heavy", "sans-serif"],
      cThin: ["Chirp Thin", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "custom-shadow":
          "rgba(101, 119, 134, 0.30) 0px 0px 12px, rgba(101, 119, 134, 0.50) 0px 1px 3px 1px",
        "edit-media-shadow": "rgba(230, 236, 240, 0.7) 0px 0px 0px 9999px",
        "nav-post-button-shadow": "rgba(0, 0, 0, 0.08) 0px 8px 28px",
      },
      spacing: {
        130: "37.375rem",
        120: "31.25rem",
        100: "27.6rem",
        85: "21.875rem",
        37: "9.832rem",
        13: "3.141rem",
        14.2: "4.357rem",
        11.5: "2.78rem",
        10.5: "2.rem",
        24.5: "6.875rem",
        13.5: "3.438rem",
        80.1: "21.75rem",
        97: "25.62rem",
        72.1: "18.75rem",
        4.1: "1.125rem",
      },
      zIndex: {
        100: "100",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // other styles...
            "font-stretch": "100%", // default value
          },
        },
      }),
      utilities: {
        ".flex-col-container": {
          "@apply flex flex-col": {},
        },
      },
      colors: {
        "primary-color": "var(--primary-color)",
        error: "var(--primary-error-color)",
      },
    },
  },
  plugins: [],
};
