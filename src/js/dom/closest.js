/**
 * closest - get the closest selected element with polyfill
 * @param {DOM Object} this  first element selector
 * @param {selector} selector closest element searched
 * @return {DOM Object} element or null
 */
function closest (selector) {
  let element = this[0] // due to skizz object
  return 'closest' in element ? element.closest(selector) : closestPolyfill(element, selector)
}

function closestPolyfill (element, selector) {
  let matches = element.matches ||
                element.msMatchesSelector ||
                element.webkitMatchesSelector

  while (element) {
    if (matches.call(element, selector)) return element
    element = element.parentNode
  }

  return null
}

export default closest
