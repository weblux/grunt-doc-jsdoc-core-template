function Skizz (selection, context) {
  this.length = selection.length
  this.context = context || null

  selection.forEach((element, index) => (this[index] = element))
}

export default Skizz
