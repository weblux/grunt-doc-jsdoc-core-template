/**
 * html - Get or set html element
 *
 * @param  [{node|string}] fragment The HTML fragment to append
 * @return {object} skizz
 */
function html (html) {
  if (arguments.length === 0 && this.length) {
    return this[0].innerHTML
  }

  return this.each(function () {
    this.innerHTML = html
  })
}

/**
 * insertHtml - Generic insert HTML string by position
 *
 * @private
 * @param  {string} position The position where to insert the element
 * @return {object} skizz
 */
function insertHtmlMixin (position) {
  /**
   * insertHtml - insert HTML string
   *
   * @private
   * @param  {string} html The HTML to insert
   * @return {object} skizz
   */
  return function insertHtml (html) {
    return this.each(function () {
      this.insertAdjacentHTML(position, html)
    })
  }
}

/**
 * insert HTML string after the element
 * @function htmlAfter
 * @param  {string} html The HTML to insert
 * @return {object} skizz
 */
let htmlAfter = insertHtmlMixin('afterend')

/**
 * insert HTML string after the element
 * @function htmlAppend
 * @param  {string} html The HTML to insert
 * @return {object} skizz
 */
let htmlAppend = insertHtmlMixin('beforeend')

/**
 * insert HTML string after the element
 * @function htmlBefore
 * @param  {string} html The HTML to insert
 * @return {object} skizz
 */
let htmlBefore = insertHtmlMixin('beforebegin')

/**
 * insert HTML string after the element
 * @function htmlPrepend
 * @param  {string} html The HTML to insert
 * @return {object} skizz
 */
let htmlPrepend = insertHtmlMixin('afterbegin')

export default html
export { htmlAfter, htmlAppend, htmlBefore, htmlPrepend }
