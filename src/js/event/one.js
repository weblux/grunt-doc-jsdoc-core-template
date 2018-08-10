import checkArguments from './checkArguments'

function one (types, selector, handler) {
  let parameters = checkArguments(...arguments)

  types = parameters.types
  selector = parameters.selector
  handler = parameters.handler

  let that = this
  let oneHandler = function oneHandler (event) {
    handler.apply(undefined, arguments)
    that.filter(this).off(event.type, selector, oneHandler)
  }

  return this.on(types, selector, oneHandler)
}

export default one
