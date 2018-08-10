let queue = []

/**
 * ready - Execute the function when the dom is ready
 *
 * @param  {function} fn The function to execute
 * @return {void}
 */
function ready (fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run)
    queue.push(fn)
    return
  }

  fn()
}

/**
 * run - Execute the queue
 *
 * @return {void}
 */
function run () {
  while (queue.length) {
    window.setTimeout(queue.shift(), 0)
  }
}

export default ready
