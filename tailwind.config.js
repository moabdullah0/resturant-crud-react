/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFBC0D",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #FFA6A600 0%, #FFFCF9 100%)',
        'lines':"url('/assets/lines.svg')"
      },
    },
  },
  plugins: [],
};
