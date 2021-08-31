module.exports = {
  purge: {
    options: {
      safelist: [
        /data-theme$/
      ]
    },
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ]
}
