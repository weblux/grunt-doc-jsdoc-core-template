/**
 * map - Apply a function on each item
 *
 * @param  {object} collection The collection to run against the function
 * @param  {type} fn The function to apply on each item from the collection
 * @return {array} The result of the function apply
 */
function map (collection, fn) {
  let results = []
  let i = -1
  let length = collection.length

  while (++i < length) {
    results[i] = fn.call(collection[i], i, collection)
  }

  return results
}

export default map
