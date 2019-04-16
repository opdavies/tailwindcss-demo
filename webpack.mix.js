const mix = require('laravel-mix')
const glob = require('glob-all');

require('laravel-mix-purgecss')

mix.postCss('src/css/app.css', 'dist/css', [
  require('tailwindcss')()
])
.purgeCss({
  paths: () => glob.sync([
    path.join(__dirname, './index.html')
  ])
})
