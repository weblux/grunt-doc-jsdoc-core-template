
/**
 * addClass - Add one or more classname to an element
 *
 * @param  {string} className The classname to add
 * @return {void}
 */
function addClass (className) {
  /**
   * classNameArray - Trim the classname than split the string whit a space
   * as a seperator into an array of substring
   *
   * @param  {string} className The string classname to transform
   * @return {array} An array of each className to add
   */
  function classNameArray (className) {
    const wsRE = /\s+/
    return className.trim().split(wsRE)
  }

  /**
   * addClassStandard - Standard addClass implementation
   *
   * @param  {node} element The HTML element to add classname
   * @param  {string} className The class to add
   * @return {void}
   */
  function addClassStandard (element, className) {
    className = classNameArray(className)

    let i = className.length
    while (i--) {
      element.classList.add(className[i])
    }
  }

  /**
   * addClassCompat - The shim addClass implementation
   *
   * @param  {node} element The HTML element to add classname
   * @param  {string} className The class to add
   * @return {void}
   */
  function addClassCompat (element, className) {
    className = classNameArray(className) // new classes (array)

    let replaced = element.className // old classes (string)
    let i = className.length

    while (i--) {
      if (replaced.indexOf(className[i]) === -1) {
        replaced += ' ' + className[i]
      }
    }
    element.className = replaced
  }

  return 'classList' in document.documentElement
    ? this.each(function () {
      addClassStandard(this, className)
    })
    : this.each(function () {
      addClassCompat(this, className)
    })
}

export default addClass
