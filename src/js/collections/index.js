import skizz from '../core/index'

import each from './each'
import filter from './filter'
import map from './map'
import once from './once'

skizz.fn.each = function (fn) {
  return each(this, fn)
}

skizz.fn.filter = function (selector) {
  return filter.apply(skizz, [this, selector])
}

skizz.fn.map = function (fn) {
  return map(this, fn)
}

skizz.fn.once = function (fn) {
  return once(this, fn)
}
