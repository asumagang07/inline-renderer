/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./node_modules/inline/**/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
