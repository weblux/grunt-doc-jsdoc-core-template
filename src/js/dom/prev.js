import skizz from '../core/index'

function prev () {
  let previous = this.map(function () {
    let prev = this.previousSibling
    while (prev !== null && prev.nodeType === 3) {
      prev = prev.previousSibling
    }
    return prev
  })

  previous = previous.filter((item) => {
    return item !== null
  })

  return (previous.length !== 0) ? skizz(previous) : null
}

export default prev
