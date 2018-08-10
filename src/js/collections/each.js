/**
 * each - Apply a function on each item of an array
 *
 * @param  {array} collection The collection to run against the function
 * @param  {function} fn The function to apply on each item from the collection
 * @return {array} The collection
 */
function each (collection, fn) {
  let index = -1
  let length = collection.length
  let val

  while (++index < length) {
    val = fn.call(collection[index], index, collection)
    if (val === false) {
      break
    }
  }

  return collection
}

export default each
