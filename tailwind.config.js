/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        tukitakitheme: {

          primary: "#4267B3",

          secondary: "#E9EBEE",

          accent: "#90949C",

          neutral: "#2F1D34",
          error: '#C42A02',

        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}
