/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#3b82f6',
        'neon-purple': '#9333ea',
        'neon-pink': '#ec4899',
        'neon-green': '#4ade80',
        'neon-yellow': '#fbbf24',
        'neon-red': '#ef4444',
        'neon-teal': '#2dd4bf',
      },
    },
  },
  plugins: [],
};