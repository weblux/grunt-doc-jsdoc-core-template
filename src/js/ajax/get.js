import ajax from './ajax'

function get (url = '', success = function () {}, error = function () {}) {
  ajax({
    url: url,
    success: success,
    error: error
  }, false)
}

export default get
