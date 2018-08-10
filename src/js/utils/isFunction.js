/**
 * isFunction - Determine if the argument passed is a function
 *
 * @param  {function} obj The argument to test if it's a function
 * @return {boolean} True if the argument passed is a function false otherwise
 */
function isFunction (obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply)
}

export default isFunction
