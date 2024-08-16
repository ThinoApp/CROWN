/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#C3C0A2",
        secondary: "#4D4734",
        third: "#393324",
        fourth: "#27241D",
      },
      backgroundPosition: {
        "bottom-center": "bottom center",
      },
      textColor: {
        primary: "#C3C0A2",
        secondary: "#4D4734",
        third: "#393324",
        fourth: "#27241D",
      },
      borderColor: {
        primary: "#C3C0A2",
        secondary: "#4D4734",
        third: "#393324",
        fourth: "#27241D",
      },
    },
  },
  plugins: [],
};
