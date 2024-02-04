const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0A202",
          200: "#F18805",
          300: "#D95D39",
          400: "#a64c7c",
          500: "#843B62",
          600: "#5d2a45"
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ]

};

module.exports = config;
