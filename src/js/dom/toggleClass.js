/**
 * toggleClass - Toggle a specific className
 *
 * @param  {string} className The classname to add or remove
 * @return {void}
 */
function toggleClass (className) {
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
   * toggleClassStandard - Standard toggleClass implementation
   *
   * @param  {node} element The HTML element to add or remove className
   * @param  {string} className The class to add or remove
   * @return {void}
   */
  function toggleClassStandard (element, className) {
    return element.classList.toggle(className)
  }

  /**
   * toggleClassCompat - The shim toggleClass implementation
   *
   * @param  {node} element The HTML element to add or remove className
   * @param  {string} className The class to add or remove
   * @return {void}
   */
  function toggleClassCompat (element, className) {
    className = classNameArray(className) // classes to remove (array)
    let replaced = element.className // old classes (string)
    let i = className.length

    while (i--) {
      if (replaced.indexOf(className[i]) === -1) {
        replaced += ' ' + className[i]
      } else {
        replaced = replaced.replace(new RegExp('\\b' + className[i] + '\\b'), '')
      }
    }

    element.className = replaced
  }

  return 'classList' in document.documentElement
    ? this.each(function () {
      toggleClassStandard(this, className)
    })
    : this.each(function () {
      toggleClassCompat(this, className)
    })
}

export default toggleClass
