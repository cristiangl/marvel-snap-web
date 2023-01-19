/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/src/images/background.webp')",
      }
    },
  },
  plugins: [],
}
