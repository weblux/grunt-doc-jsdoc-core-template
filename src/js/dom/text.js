
/**
 * text - Get or set the text content
 *
 * To get the content, juste pass the text parameter
 *
 * @param  [{string}] text The text to set
 * @return {object}      skizz
 */
function text (text) {
  if (arguments.length === 0 && this.length) {
    return this[0].textContent
  }

  return this.each(function () {
    this.textContent = text
  })
}

export default text
