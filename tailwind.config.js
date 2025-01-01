/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to top, #f3c614, #facc15, #fff7df)",
      },
      animation: {
        'gradient-move': 'gradientMove 3s infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

