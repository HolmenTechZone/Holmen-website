/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      // Define custom colors

      colors: {
        Gray: "#A9A2A2",
        Pale_lavender_pink: "#FACDFF",
        Medium_orchid_purple: "#B262BA",
      },
    },
  },
  plugins: [],
};