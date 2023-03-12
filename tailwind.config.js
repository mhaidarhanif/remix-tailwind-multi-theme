module.exports = {
  content: ['./**/*.tsx'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind/plugin/multi-theme-plugin')({
      themes: require('./app/styles/themes.js'),
    }),
  ],
}
