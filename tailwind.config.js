module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepGreen: "#44AC8D",
        lightGreen: "#4BD7AC",
        deepBlack: "#232323",
        black: "#454545",
        lightBlack: "#787878",
        deepGray: "#a1a1a1",
        gray: "#cdcdcd",
        lightGray: "#efefef",
      },
      fontFamily: {
        Jua: ["Jua", "san-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
