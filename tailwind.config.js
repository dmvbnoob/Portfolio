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
      keyframes: {
        spinclock: {
          '0%': { transform: 'rotate(0deg) rotate(12deg)' },
          '100%': { transform: 'rotate(0deg) rotate(360deg)' },
        },
        spincounter: {
          '0%': { transform: 'rotate(0deg) rotate(-12deg)' },
          '100%': { transform: 'rotate(0deg) rotate(-360deg)' },
        }
      },
      animation: {
        'spin-slow-clock': 'spinclock 20s linear infinite',
        'spin-slow-counter': 'spincounter 20s linear infinite'
      }
    },
  },
  plugins: [],
}

