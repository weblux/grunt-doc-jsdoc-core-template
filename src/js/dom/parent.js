import $ from '../core/index'

/**
 * parent - Get parent element of the passedNode
 * @return {string | object}         The property value if value is undefined Skizz otherwise
 */
function parent () {
  let parent

  if (!this.length) {
    parent = this.parentNode
  } else {
    this.each(function () {
      parent = this.parentNode
    })
  }

  return $(parent)
}

export default parent
