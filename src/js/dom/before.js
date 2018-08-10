/**
 * before - Insert an html fragment before an element
 *
 * @param  {node|string} fragment The HTML fragment to insert
 * @return {object} skizz
 */
function before (fragment) {
  if (typeof fragment === 'string') {
    return this.htmlBefore(fragment)
  }

  if (fragment.length) {
    fragment = fragment[0]
  }

  return this.each(function (index) {
    this.parentNode.insertBefore(index > 0 ? fragment.cloneNode(true) : fragment, this)
  })
}

export default before
