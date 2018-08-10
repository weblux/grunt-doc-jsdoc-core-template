/**
 * hasClass - Check if the element has a specific className
 *
 * @param  {string} className The className to search for
 * @return {boolean} True if the className is set on the element false otherwise
 */
function hasClass (className) {
  /**
   * hasClassStandard - Standard hasClass implementation
   *
   * @param  {type} element The HTML node to check if it contains the className
   * @param  {string} className The className to search for
   * @return {boolean} True if the className is set on the element false otherwise
   */

  function hasClassStandard (element, className) {
    return element.classList.contains(className)
  }

  /**
   * hasClassCompat - Shim hasClass implementation
   *
   * @param  {node} element The HTML node to check if it contains the className
   * @param  {string} className The className to search for
   * @return {boolean} True if the className is set on the element false otherwise
   */
  function hasClassCompat (element, className) {
    if (!element.className) {
      return false
    }

    return element.className.indexOf(className) !== -1
  }

  return 'classList' in document.documentElement
    ? this.once(function () {
      return hasClassStandard(this, className)
    })
    : this.once(function () {
      return hasClassCompat(this, className)
    })
}

export default hasClass
