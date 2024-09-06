/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xxs: "300px",
      },
      colors: {
        mixblue: "#04b7cf",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
