/**
 * removeAttr - Remove attribute
 *
 * @param  {string} name The attribute to remove
 * @return {object} skizz
 */
function removeAttr (name) {
  return this.each(function () {
    this.removeAttribute(name)
  })
}

export default removeAttr
