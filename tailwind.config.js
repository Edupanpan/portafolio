/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          letra:'#212620',
          letra2:'#39594D',
          botones:'#F23005',
          border:'#212620',
          sombra:'#212620',
          sombra2:'#A6330A'
        },
      },
    },
  },
  plugins: [],
}
