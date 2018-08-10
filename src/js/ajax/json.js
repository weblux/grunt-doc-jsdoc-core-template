import ajax from './ajax'

function json (url = '', success = function () {}, error = function () {}) {
  ajax({
    url: url,
    success: success,
    error: error
  }, true)
}

export default json
