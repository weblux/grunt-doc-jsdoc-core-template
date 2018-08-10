/**
 * hash - Get an hash of the passed argument
 * Usefull to generate a key for localStorage based on the current url
 *
 * @param  {string} string The string to hash
 * @return {number} The hash of the passed argument
 */
function hash (string) {
  let hash = 0

  if (string.length === 0) {
    return hash
  }

  let chara
  let i
  let length = string.length

  for (i = 0; i < length; i++) {
    chara = string.charCodeAt(i)
    hash = ((hash << 5) - hash) + chara
    hash = hash & hash // Convert to 32bit integer
  }

  return hash
}

export default hash
