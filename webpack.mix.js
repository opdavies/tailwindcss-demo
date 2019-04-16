const mix = require('laravel-mix')

mix.postCss('src/css/app.css', 'dist/css', [
  require('tailwindcss')()
])
