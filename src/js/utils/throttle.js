/**
 * throttle -
 *
 * @return
 */
function throttle (fn, interval, immediate) {
  let waiting = false
  let args
  let callTimer

  interval = interval || 250
  immediate = !!immediate

  function clear () {
    waiting = false
  }

  function exec () {
    fn.apply(null, args)
    args = null
    callTimer = null
  }

  function func () {
    args = arguments

    if (immediate && !waiting) {
      exec()
      waiting = setTimeout(clear, interval)
    } else {
      callTimer = callTimer || setTimeout(exec, interval)
    }
  }

  return func
}

export default throttle
