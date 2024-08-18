/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9423a",
        secondary: "#fa7b75",
      },
    },
  },
  plugins: [],
};
