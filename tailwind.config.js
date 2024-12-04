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
          botones:'#F23005',
          border:'#39594D',
          sombra:'#39594D'
        },
      },
    },
  },
  plugins: [],
}
