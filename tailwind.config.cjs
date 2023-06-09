/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    colors: {
      mainGray: "#202023",
      redAccent: "#ef4444",
      altGray: "#313134",
      mainWhite: "#eeeeee",
      altLightGray: "#4fd1c5",
      detailGray: "#525252",
      gray900: "#111827",
      gray200: "#e5e7eb",
    },
    extend: {
      spacing: {
        500: "500px",
      },
      fontFamily: {
        plus: ["M PLUS Rounded 1c", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
  darkMode: "class",
};
