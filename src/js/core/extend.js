/**
 * extend - Extend an object with additional properties
 *
 * @param  {object} target The object to extend
 * @param  {object} ...mixins The object with additional properties
 * @return {object} The object extended
 */
function extend (target, ...mixins) {
  let i = -1
  let length = mixins.length

  while (++i < length) {
    let mixin = mixins[i]

    for (let prop in mixin) {
      if (!mixin.hasOwnProperty(prop)) {
        continue
      }

      Object.defineProperty(target, prop, {
        value: mixin[prop],
        enumerable: true,
        writable: true
      })
    }
  }

  return target
}

export default extend
