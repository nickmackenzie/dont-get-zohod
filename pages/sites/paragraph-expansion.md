CSS

```css
.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* truncate to 4 lines */
  -webkit-line-clamp: 4;
}
```

Script

```javascript
var parapraphs = document.querySelectorAll('.line-clamp')
for (let index = 0; index < parapraphs.length; index++) {
  const p = parapraphs[index]
  p.setAttribute('id', `para-${index}`)
  p.setAttribute('data-expanded', true)
  var button = document.createElement('label')
  button.innerText = 'Show More'
  button.onclick = () => toggleText(`para-${index}`)
  p.parentNode.appendChild(button)
}

function toggleText(id) {
  var p = document.getElementById(id)
  const expanded = p.getAttribute('data-expanded') === 'true'

  if (expanded) {
    p.classList.replace('line-clamp', 'line-clamp-none')
    let button = p.nextElementSibling
    button.innerText = 'Show Less'
  } else {
    p.classList.replace('line-clamp-none', 'line-clamp')
    let button = p.nextElementSibling
    button.innerText = 'Show More'
  }

  p.setAttribute('data-expanded', !expanded)
}
```
