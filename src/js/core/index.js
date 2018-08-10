import Skizz from './skizz'
import ready from './ready'
import extend from './extend'
import i18n from './i18n'
import Widgets from './widgets'

/**
 * skizz - description
 *
 * @private
 * @param  {string|function|object|array} selector The css selector to search for matching element
 * @param  {object} [root] The context for selector
 * @return {object} skizz
 */
function skizz (selector, root) {
  const selType = typeof selector

  if (selType === 'string' && selector.charAt(0) === '<') {
    let div = document.createElement('div')
    div.innerHTML = selector
    return new Skizz([].slice.call(div.childNodes))
  }

  if (selType === 'string') {
    if (root !== undefined) {
      root = root.length ? root[0] : root
    } else {
      root = document
    }
    return new Skizz([].slice.call(root.querySelectorAll(selector)))
  }

  if (selType === 'function') {
    return skizz.ready(selector)
  }

  if (selector instanceof Skizz) {
    return selector
  }

  if (selector instanceof window.HTMLElement) {
    return new Skizz([selector])
  }

  if (selector instanceof Array) {
    return new Skizz(selector)
  }

  if (selector instanceof window.NodeList || selector instanceof window.HTMLCollection) {
    return new Skizz([].slice.call(selector))
  }

  return new Skizz([document])
}

skizz.fn = Skizz.prototype
skizz.ready = ready
skizz.extend = extend
skizz.i18n = i18n
skizz.Widgets = Widgets

export default skizz
