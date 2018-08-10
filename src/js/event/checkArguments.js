import isFunction from '../utils/isFunction'

/**
 * checkArguments - As some parameters are optionnal, check and set each
 * parameters properly
 *
 * @param  {string} types The types of event to set
 * @param  {string} [selector] The selector for delegation
 * @param  {function} handler The function handling the event
 * @private
 * @return {object} arguments
 */
function checkArguments (types, selector, handler) {
  if (arguments.length === 2 && isFunction(selector)) {
    handler = selector
    selector = '_self'
  }
  //
  // if (arguments.length === 3 && isFunction(data)) {
  //   handler = data
  //   if (typeof selector !== 'string') {
  //     data = selector
  //     selector = '_self'
  //   } else {
  //     data = undefined
  //   }
  // }

  return {
    types: types,
    selector: selector,
    handler: handler
  }
}

export default checkArguments
