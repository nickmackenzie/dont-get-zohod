# Add Support For Show More/Less

This adds the ability to flag a paragraph as content that should be collapsible and adds a show more/less toggle text.

## How This Works

When the a page loads, the script will find all elements with the `.line-clamp` class name. These elements will be looped through and uniquely tagged to allow for controlling multiple elements.
A show more/less button then gets appended to the elements with an onclick event which toggles the `.line-clamp` class with `.line-clamp-none`.

## CSS

Add the following class into the css editor in sites and apply the class name to any text element that should be collapsible.

```css
.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* truncate to 4 lines, change this as required */
  -webkit-line-clamp: 4;
}
```

## Script

Add the following script to the page footer

```javascript
var parapraphs = document.querySelectorAll(".line-clamp");
for (let index = 0; index < parapraphs.length; index++) {
  const p = parapraphs[index];
  p.setAttribute("id", `para-${index}`);
  p.setAttribute("data-expanded", true);
  var button = document.createElement("label");
  button.innerText = "Show More";
  button.onclick = () => toggleText(`para-${index}`);
  p.parentNode.appendChild(button);
}

function toggleText(id) {
  var p = document.getElementById(id);
  const expanded = p.getAttribute("data-expanded") === "true";

  if (expanded) {
    p.classList.replace("line-clamp", "line-clamp-none");
    let button = p.nextElementSibling;
    button.innerText = "Show Less";
  } else {
    p.classList.replace("line-clamp-none", "line-clamp");
    let button = p.nextElementSibling;
    button.innerText = "Show More";
  }

  p.setAttribute("data-expanded", !expanded);
}
```
