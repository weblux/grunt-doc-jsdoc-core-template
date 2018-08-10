import skizz from '../core/index'

function next () {
  let next = this.map(function () {
    let next = this.nextSibling
    while (next !== null && next.nodeType === 3) {
      next = next.nextSibling
    }
    return next
  })

  next = next.filter((item) => {
    return item !== null
  })

  return (next.length !== 0) ? skizz(next) : null
}

export default next
