module.exports = {
  purge: ["src/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172,67%,45%)",
        "very-dark-cyan": "hsl(183,100%,15%)",
        "dark-grayish-cyan": "hsl(184,14%,43%)",
        "dark-grayish-cyan-2": "hsl(184,14%,56%)",
        "light-grayish-cyan": "hsl(184,14%,84%)",
        "light-grayish-cyan-2": "hsl(184,14%,97%)",
      },
      fontFamily: {
        display: ['"Space Mono"', "Helvetica", "Arial"],
      },
    },
  },
  variants: {},
  plugins: [],
};
