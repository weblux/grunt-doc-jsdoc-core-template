/**
 * hasAttr - Check if the element has a specific attribute
 *
 * @param  {string} attribute The attribute to search for
 * @return {boolean} True if the className is set on the element false otherwise
 */
function hasAttr (attribute) {
  return this.once(function () {
    return this.hasAttribute(attribute)
  })
}

export default hasAttr
