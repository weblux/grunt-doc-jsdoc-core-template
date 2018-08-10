/**
 * remove - Remove an element from the dom
 *
 * @return {object}  Skizz
 */
function remove () {
  return this.each(function () {
    this.parentNode.removeChild(this)
  })
}

export default remove
