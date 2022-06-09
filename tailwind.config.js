module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a8ea8c",

          "secondary": "#7c2ab7",

          "accent": "#e09d79",

          "neutral": "#fcedc7",

          "base-100": "#FFFFFF",

          "info": "#385EE5",

          "success": "#53EABA",

          "warning": "#F5C25B",

          "error": "#F82A3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}