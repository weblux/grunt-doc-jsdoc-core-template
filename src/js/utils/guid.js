import hash from './hash'

let indexes = {}

/**
 * guid - Generate a unique ID
 *
 * @param  {string} [id='skizz'] The id to use
 * @param  {boolean} [url=true] Use the document url as an hash to generate the id
 * @return {string} The generated guid
 */
function guid (id = 'skizz', url = true) {
  if (indexes[id] === undefined) {
    indexes[id] = 0
  } else {
    indexes[id]++
  }

  return `${id}-${indexes[id]}` + (url ? `--${hash(document.URL).toString()}` : '')
}

export default guid
