import './style.css'
import Split from 'split-grid'

Split({
  columnGutters: [{
      track: 1,
      element: document.querySelector('.vertical-gutter'),
  }],
  rowGutters: [{
      track: 1,
      element: document.querySelector('.horizontal-gutter'),
  }]
})


const $ = selector => document.querySelector(selector)

console.log('Main!')

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener('input', update)
$css.addEventListener('input', update)
$html.addEventListener('input', update)

function update () {
  const html = createHtml()
  $('iframe').setAttribute('srcdoc', html)
}

const createHtml = () => {
  const html = $html.value
  const css = $css.value
  const js = $js.value

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      <script>
      ${js}  
      </script>
      ${html}
    </body>  
  </html> 
  `
}