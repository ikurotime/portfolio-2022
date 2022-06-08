module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/img/Pattern.svg')",
        patternDark: "url('/src/img/Pattern-dark.svg')"
      }
    }
  },
  plugins: []
}
