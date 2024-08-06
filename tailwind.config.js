/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["EduHand", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#1F2937", // Dark Slate
        secondary: "#D1D5DB", // Light Gray
        accent: "#FCA311", // Warm Amber
        background: "#F3F4F6", // Soft White
        text: "#111827", // Black
        button: "#E5E7EB", // Cool Gray
      },
    },
  },
  plugins: [],
};
