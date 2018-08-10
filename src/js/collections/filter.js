import isFunction from '../utils/isFunction'

function stringSorting (collection, filter, skizz) {
  if (!filter.charAt(0) === ':') {
    return instanceSorting(collection, skizz(filter))
  } else {
    if (filter === ':even') {
      filter = function (index) {
        return index % 2 !== 0
      }
    } else if (filter === ':odd') {
      filter = function (index) {
        return index % 2 === 0
      }
    } else {
      filter = function () { return true }
    }

    return fnSorting(collection, filter)
  }
}

function fnSorting (collection, filter) {
  let index = -1
  let length = collection.length
  let keep = []

  while (++index < length) {
    if (filter(index, collection[index])) {
      keep.push(collection[index])
    }
  }

  return keep
}

function elementSorting (collection, filter) {
  let index = -1
  let length = collection.length
  let keep = []

  while (++index < length) {
    if (collection[index] === filter) {
      keep.push(collection[index])
    }
  }

  return keep
}

function instanceSorting (collection, filter) {
  let index = -1
  let filterIndex
  let collectionLength = collection.length
  let filterLength = filter.length
  let keep = []

  while (++index < collectionLength) {
    for (filterIndex = 0; filterIndex < filterLength; filterIndex++) {
      if (collection[index] === filter[filterIndex]) {
        keep.push(collection[index])
      }
    }
  }

  return keep
}

function filter (collection, filter) {
  let keep = []

  if (typeof filter === 'string') {
    keep = stringSorting(collection, filter, this)
  }

  if (isFunction(filter)) {
    keep = fnSorting(collection, filter)
  }

  if (typeof filter === 'object') {
    if (filter.context !== undefined) {
      keep = instanceSorting(collection, filter)
    } else {
      keep = elementSorting(collection, filter)
    }
  }

  return (keep.length ? this(keep) : collection)
}

export default filter
