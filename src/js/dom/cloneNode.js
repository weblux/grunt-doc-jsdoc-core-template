import $ from '../core/index'

/**
 * cloneNode - clone a htmlNode
 *
 * @param  {boolean} cloneChildren boolean to clone children or not
 * @return {object} skizz
 */
function cloneNode (cloneChildren) {
  let clone

  if (this.length) {
    clone = this[0].cloneNode(cloneChildren)
  } else {
    clone = this.cloneNode(cloneChildren)
  }

  return $(clone)
}

export default cloneNode
