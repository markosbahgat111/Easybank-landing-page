module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sectionOne': "repeat(auto-fill, minmax(300px, 1fr))",
        'sectionTwo': "repeat(auto-fill, minmax(300px, 1fr))",
      }
    },
  },
  plugins: [],
}
