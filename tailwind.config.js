module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepGreen: "#44AC8D",
        lightGreen: "#4BD7AC",
      },
      fontFamily: {
        Jua: ["Jua", "san-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
