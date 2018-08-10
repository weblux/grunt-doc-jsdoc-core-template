function scrollTo (element, duration = 1000, animation = null) {
  let pageY = window.pageYOffset
  let targetY

  if (typeof element === 'number') {
    targetY = element
  } else if (typeof element === 'object') {
    targetY = element.length ? element[0].getBoundingClientRect().top + pageY : element.getBoundingClientRect().top + pageY
  } else {
    targetY = pageY
  }

  let diff = targetY - pageY
  let start

  window.requestAnimationFrame(step)

  function step (timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    let progress = timestamp - start
    // Get percent of completion in range [0, 1].
    let percent = Math.min(progress / duration, 1)

    window.scrollTo(0, pageY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (progress < duration) {
      window.requestAnimationFrame(step)
    }
  }
}

export default scrollTo
