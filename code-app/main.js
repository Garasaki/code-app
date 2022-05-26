import './style.css'

const $ = selector => document.querySelector(selector)

console.log('Main!')

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener('input', update) // update when js changes
$css.addEventListener('input', update) // update when css changes
$html.addEventListener('input', update) // update when html changes



function update () {
  const html  = createHhtml()
  $('iframe').setAttribute('srcdoc', html)
}

const createHhtml = () => {
  const html = $html.value
  const css = $css.value
  const js = $js.value

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      <style>
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