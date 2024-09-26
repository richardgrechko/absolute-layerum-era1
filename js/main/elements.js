var Elements = {
  setHTML: function(text="Undefined?",element="small",style) {
    if (style.color == null) {
      style.color = "#fff"
    }
    if (style.shadowX == null) {
      style.shadowX = 0
    }
    if (style.shadowY == null) {
      style.shadowY = 0
    }
    if (style.shadowBlur == null) {
      style.shadowBlur = "#fff"
    }
    if (style.shadowColor == null) {
      style.shadowColor = "#fff"
    }
    return `<${element} style="color: ${style.color}; text-shadow: ${style.shadowX} ${style.shadowY} ${style.shadowBlur} ${style.shadowColor}">${text}</${element}>`
  },
  addButton: function(text="Undefined?",onClick=null,style) {
    if (style.backgroundColor == null) {
      style.backgroundColor = "#fff"
    }
    if (style.color == null) {
      style.color = "#fff"
    }
    return `<center><button onclick="${onClick}" style="background-color: ${style.backgroundColor}; color: ${style.color}">${text}</button></center>`
  }
}
