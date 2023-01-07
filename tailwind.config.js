/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        tertiary: "#4BBF49",
        quaternary: "#27C3A7",
        quinary: "#6e45e2",
      },
    },
  },
  plugins: [],
};
