import '../utils/fast-button'
import $ from '../skizz'

/**
 * anchor - A progressive disclosure widget. Anchor lets one element control
 * the display of another element by means of click/touch.
 *
 * @param {Object} [options] Custom options
 * @param {Object} [options.one] Define if only one anchor at a time could be open
 * @param {Object} [options.onClick=function(){}] A callback executed each time the anchor is clicked/touched. It is passed two arguments: the anchor controlling the disclosure and the element disclosed.
 * @author Renow <info@renow.public.lu>
 * @version 2.0.0
 * @return {Object} Skizz
 */
$.fn.anchor = function anchor (options) {
  options = $.extend({
    one: true,
    onClick: $.noop
  }, options)

  const module = 'anchor'
  const activeClassName = 'is-active'
  const destClassName = module + '-destination'
  let activeAnchor = null
  

  this.each(function (index, elements) {
    let trigger = $(elements[index])
    let destination = $(trigger.attr('data-destination') || elements[index].hash)

    if (destination.attr('id') !== null) {
      destination.attr('id', (module + $.rand(0, 1000)))
    }

    /**
     * Initializes the plugin.
     * Classes and listeners are added to the controlled elements.
     */
    function init () {
      trigger.attr({
        'tabindex': 0,
        'aria-controls': destination.attr('id')
      })
      .addClass(module)
      .on('keypress', eventHandler)
      .fastButton(eventHandler)

      destination.addClass(destClassName)
    }

    /**
     * Handles click/touch/keypress events on the trigger
     * @param {Object} event Click/Touch event details
     */
    function eventHandler (event) {
      if (event.type === 'keypress' && event.keyCode !== 13) {
        return
      }
      event.preventDefault()
      trigger.toggleClass(activeClassName)
      destination.toggleClass(activeClassName)
      callback()
      if (activeAnchor) {
        if (trigger !== activeAnchor && options.one) {
          activeAnchor.fire('click')
        }
        activeAnchor = null
      }
      if (trigger.hasClass(activeClassName)) {
        activeAnchor = trigger
      }
    }

    /**
     * callback - execute the callback function from option
     *
     * @return {undefined}
     */
    function callback () {
      if (typeof options.onClick === 'function') {
        options.onClick(trigger, destination)
      }
    }

    init()
  })

  return $
}
