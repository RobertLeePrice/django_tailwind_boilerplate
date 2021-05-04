module.exports = {
  purge: {
    enabled: false,
    content: ['./app/templates/**/*.html'],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
