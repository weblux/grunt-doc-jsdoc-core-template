/**
 * append - Append an html fragment into an element
 *
 * @param  {node|string} fragment The HTML fragment to insert
 * @return {object} skizz
 */
function append (fragment) {
  if (typeof fragment === 'string') {
    return this.htmlAppend(fragment)
  }

  if (fragment.length) {
    fragment = fragment[0]
  }

  return this.each(function (index) {
    this.appendChild(index > 0 ? fragment.cloneNode(true) : fragment)
  })
}

export default append
