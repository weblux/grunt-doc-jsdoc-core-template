
/**
 * css - Get or set css property to the collections
 *
 * @param  {string | object} prop    The property to get or set
 * @param  {string}          [value] The value to set to the property
 * @return {string | object}         The property value if value is undefined Skizz otherwise
 */
function css (prop, value) {
  if (typeof prop === 'string' && value === undefined && this.length) {
    return window.getComputedStyle(this[0]).getPropertyValue(prop, null)
  }

  return this.each(function () {
    if (typeof prop === 'string') {
      this.style.setProperty(prop, value)
    } else {
      let str = []
      for (value in prop) {
        if (!prop.hasOwnProperty(value)) {
          continue
        }
        str.push(value + ':' + prop[value])
      }
      this.style.cssText += str.join(';')
    }
  })
}

export default css
