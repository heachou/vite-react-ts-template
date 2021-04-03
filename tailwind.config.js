const defaultConfig = require("tailwindcss/defaultConfig");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter var", defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  darkMode: "media"
};