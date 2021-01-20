const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/*.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    purgecss,
    require('cssnano'),
    require('autoprefixer')
  ]
}