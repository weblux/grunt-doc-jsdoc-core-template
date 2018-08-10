/**
 * Memoizes any function into a cache where keys
 * are calculated from the parameters of the function
 * return the results if a function is already pass with the same arguments
 * @memberOf memoize
 * @param {function} func - the function to memoize
 */
function memoize (func, hashFunc) {
  /**
   * Previous calls will be cached here
   */

  func.memoize = func.memoize || ('Map' in window ? (new Map()) : (new MyMap()))

  return function () {
    /**
     * Calculate the key used to store the result of the function call
     */
    let fp = hashFunc ? hashFunc.apply(this, arguments) : Array.prototype.slice.call(arguments)

    if (!func.memoize.has(fp)) {
      func.memoize.set(fp, func.apply(this, arguments))
    }

    return func.memoize.get(fp)
  }
}

function MyMap () {
  this.keys = []
  this.cache = []
}

MyMap.prototype.has = function (key) {
  return this.keys.indexOf(key) > -1
}

MyMap.prototype.set = function (key, value) {
  let idx = this.keys.indexOf(key)

  if (idx === -1) {
    this.keys.push(key)
    this.cache.push(value)
  } else {
    this.cache[idx] = value
  }

  return this.cache.length
}

MyMap.prototype.get = function (key) {
  let idx = this.keys.indexOf(key)
  return idx === -1 ? null : this.cache[idx]
}

export default memoize
