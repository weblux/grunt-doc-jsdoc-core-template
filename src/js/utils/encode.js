/**
 * encode - Encodes a string as an URI parameter
 *
 * @param  {string} string URI to encode
 * @return {string} The encoded URI
 */
function encode (string) {
  return encodeURIComponent(string)
}

export default encode
