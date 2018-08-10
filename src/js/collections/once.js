/**
 * once - Run only once a function against the whole collection
 *
 * @param  {array} collection The collection to run against the function
 * @param  {function} predicate  The collection to run against the function
 * @return {boolean}
 */
function once (collection, predicate) {
  let i = collection.length

  while (i--) {
    if (predicate.call(collection[i], i, collection)) {
      return true
    } else {
      return false
    }
  }
}

export default once
