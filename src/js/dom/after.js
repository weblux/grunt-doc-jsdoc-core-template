/**
 * after - Insert an html fragment after an element
 *
 * @param  {node|string} fragment The HTML fragment to insert
 * @return {object} skizz
 */
function after (fragment) {
  if (typeof fragment === 'string') {
    return this.htmlAfter(fragment)
  }

  if (fragment.length) {
    fragment = fragment[0]
  }

  return this.each(function (index) {
    this.parentNode.insertBefore(index > 0 ? fragment.cloneNode(true) : fragment, this.nextSibling)
  })
}

export default after
