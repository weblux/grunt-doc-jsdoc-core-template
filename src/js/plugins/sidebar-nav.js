import $ from '../skizz'

/**
 * a11ynav function - Skizz plugin to make sidebar layout navigation
 * accessible.
 *
 * @param  {object} [options] Plugin options to extend
 * @param  {object} [options.duration=200] The duration of the css animation
 * @param  {object} [options.api=false] Define if it return the api or skizz
 * @return {object}         Skizz or plugin method
 */
$.fn.a11ynav = function a11ynav (options) {
  options = $.extend({
    duration: 200,
    api: false
  }, options)

  const module = 'a11ynav'
  const active = 'is-active'
  let body = $('body')
  let content = $('.page-body')
  let timer = null

  /**
   * open - Handle the accessibility when the nav is opening
   *
   * @return {object}  Skizz
   */
  function open () {
    body.addClass(module + '-' + active)

    // A timeout is needed because there is a CSS transition on the navigation
    timer = window.setTimeout(() => {
      content.addClass(module + '-' + active)
      timer = null
    }, options.duration)

    return $
  }

  /**
   * close - Handle the accessibility when the nav is closing
   *
   * @return {object}  Skizz
   */
  function close () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    body.removeClass(module + '-' + active)
    content.removeClass(module + '-' + active)

    return $
  }

  return options.api ? {
    open: open,
    close: close
  } : this
}
