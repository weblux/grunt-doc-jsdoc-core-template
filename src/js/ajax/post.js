import extend from '../core/extend'

function post (url, data, header = 'application/x-www-form-urlencoded; charset=UTF-8') {
  let request = new XMLHttpRequest();
  request.open('POST', url, true)
  request.setRequestHeader('Content-type', header)
  request.send(data)
}

export default post
