/**
   * Removes an element from the DOM
   * @alias detach
   * @memberOf element
   * @param {Object} element
   * @return the removed element
   */
  function detachElement () {
    let element = this[0]
    element.parentNode.removeChild(element)
    return element
  }

  export default detachElement
