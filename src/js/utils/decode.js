/**
 * decode - Decodes an URI parameters into a string
 *
 * @param  {string} uri URI to decode
 * @return {string} The decode uri
 */
function decode (uri) {
  return decodeURIComponent(uri)
}

export default decode
