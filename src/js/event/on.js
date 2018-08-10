import skizz from '../core/index'
import checkArguments from './checkArguments'

function delegate (selector, handler) {
  return function (event) {
    skizz(selector).each(function () {
      if (this.contains(event.target)) {
        handler(event)
      }
    })
  }
}

function on (types, selector, handler) {
  let parameters = checkArguments(...arguments)

  types = parameters.types
  selector = parameters.selector
  handler = parameters.handler

  let originalCallback = handler

  if (selector !== '_self' && selector !== null) {
    handler = delegate(selector, handler)
  }

  types = types.split(' ')
  return this.each(function () {
    this.SkizzHandlers = this.SkizzHandlers || {}

    types.forEach((type) => {
      this.SkizzHandlers[type] = this.SkizzHandlers[type] || []
      this.SkizzHandlers[type].push({
        selector: selector,
        callback: handler,
        originalCallback: originalCallback
      })
      this.addEventListener(type, handler)
    })
  })
}

export default on
