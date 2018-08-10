/**
 * prepend - Prepend an html fragment into an element
 *
 * @param  {node|string} fragment The HTML fragment to insert
 * @return {object} skizz
 */
function prepend (fragment) {
  if (typeof fragment === 'string') {
    return this.htmlPrepend(fragment)
  }

  if (fragment.length) {
    fragment = fragment[0]
  }

  return this.each(function (index) {
    this.insertBefore(index > 0 ? fragment.cloneNode(true) : fragment, this.firstChild)
  })
}

export default prepend
