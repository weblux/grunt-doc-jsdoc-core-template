/**
 * debounce -
 *
 * @return
 */
function debounce (fn, interval, immediate) {
  let waiting = false
  let timer
  let args

  interval = interval || 250
  immediate = !!immediate

  function clear () {
    waiting = false
  }

  function exec () {
    timer = null
    fn.apply(null, args)
    args = null
  }

  function funcImmediate () {
    args = arguments
    if (waiting) return
    waiting = true
    fn.apply(null, args)
    timer = setTimeout(clear, interval)
  }

  function funcNotImmediat () {
    args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(exec, interval)
  }

  return immediate ? funcImmediate() : funcNotImmediat()
}

export default debounce
