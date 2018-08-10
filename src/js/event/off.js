import checkArguments from './checkArguments'

function off (types, selector, handler) {
  let parameters = checkArguments(...arguments)

  types = parameters.types
  selector = parameters.selector
  handler = parameters.handler

  types = types.split(' ')
  return this.each(function () {
    if (!this.SkizzHandlers) {
      return
    }

    types.forEach((type) => {
      let listeners = this.SkizzHandlers[type]

      if (!listeners) {
        return
      }

      listeners.forEach((listener, index) => {
        if (listener.selector === selector && listener.originalCallback === handler) {
          this.removeEventListener(type, listener.callback)
          this.SkizzHandlers[type] = listeners.splice(index, 1)
        }
      })
    })
  })
}

export default off
