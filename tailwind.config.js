/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "sans": "Open Sans",
        "nunito": "Nunito"
      },
      colors: {
        'white': '#fff',
        'grey1': '#333333',
        'grey2': '#828282',
        "grey3": "#4F4F4F",
        "grey4": "#5D5D5F",
        'orange': '#FF5D22',
        'yellow': '#F2C94C'
      },
      boxShadow: {
        'v1': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'v2': '0px 4.09207px 25.2717px 6.52174px rgba(0, 0, 0, 0.2)',
        'v3': '0px 0px 22.3333px 0.930555px rgba(238, 238, 238, 0.88)'
      },
      screens: {
        'sm': '0px',
        'md': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        'hmd': '799px',
        'hlg': '1100px',
        'hsm': '0px'

      }
    },
  },
  plugins: [],
}