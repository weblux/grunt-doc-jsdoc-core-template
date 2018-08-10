import extend from '../core/extend'

let options = {
  url: '',
  success: function () {},
  error: function () {},
  complete: function () {}
}

function ajax (settings, json) {
  options = extend({}, options, settings)

  let request = new XMLHttpRequest()
  request.open('GET', options.url, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let data = json ? JSON.parse(request.responseText) : request.responseText
      options.success(data)
      options.complete(data)
    } else {
      options.error(request.responseText)
      options.complete()
    }
  };

  request.onerror = function() {
    options.error()
    options.complete()
  };

  request.send();
}

export default ajax
