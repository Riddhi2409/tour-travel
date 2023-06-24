/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation : {
        'marquee-infinite' : 'marquee 15s linear infinite',
      },
      boxShadow: {
        '3xl': ' 5.6px 11.2px 11.2px hsl(0deg 0% 0% / 0.33)'
      }
    },
  },
  plugins: [],
}