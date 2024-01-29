/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['itc-avant-garde-gothic-pro', 'sans-serif'], // Add this line
      },
    },
  },
  plugins: [],
}

