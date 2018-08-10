
/**
 * removeClass - Remove one or more classname to an element
 *
 * @param  {string} className The classname to remove
 * @return {void}
 */
function removeClass (className) {
  /**
   * classNameArray - Trim the classname than split the string whit a space
   * as a seperator into an array of substring
   *
   * @param  {string} className The string classname to transform
   * @return {array} An array of each className to remove
   */
  function classNameArray (className) {
    const wsRE = /\s+/
    return className.trim().split(wsRE)
  }

  /**
   * removeClassStandard - Standard removeClass implementation
   *
   * @param  {node} element The HTML element to remove classname
   * @param  {string} className The class to remove
   * @return {void}
   */
  function removeClassStandard (element, className) {
    if (!element.className) {
      return false
    }

    className = classNameArray(className)

    let i = className.length
    while (i--) {
      element.classList.remove(className[i])
    }
  }

  /**
   * removeClassCompat - The shim removeClass implementation
   *
   * @param  {node} element The HTML element to remove classname
   * @param  {string} className The class to remove
   * @return {void}
   */
  function removeClassCompat (element, className) {
    className = classNameArray(className) // classes to remove (array)
    let replaced = element.className // old classes (string)
    let i = className.length

    while (i--) {
      if (replaced.indexOf(className[i]) !== -1) {
        replaced = replaced.replace(new RegExp('\\b' + className[i] + '\\b'), '')
      }
    }

    element.className = replaced
  }

  return 'classList' in document.documentElement
    ? this.each(function () {
      removeClassStandard(this, className)
    })
    : this.each(function () {
      removeClassCompat(this, className)
    })
}

export default removeClass
