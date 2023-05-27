/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BrunoAceSC: ["Bruno Ace SC", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
