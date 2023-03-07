function CreateDoc(Tag, Parents, attri, attriValue) {
  const element = document.createElement(Tag)
  Parents.appendChild(element);
  if (attri !== undefined) {
    element.setAttribute(attri, attriValue)
  }
}

function Display(Tag) {
  Tag.style.display = "flex"
  Tag.style.justifyContent = "center"
  Tag.style.alignItems = "center"
}

document.body.style.cssText = "width:100vw; height:100vh"

CreateDoc("div", document.body)
const Div = document.body.children[1];
Div.style.cssText = "width:100%; height:100%; flex-direction:column"
Display(Div)