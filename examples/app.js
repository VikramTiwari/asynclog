const log = require('../index.js')('zion')

function logger (msg) {
  log(msg)
}

logger({'Matrix': 'There is no spoon!'})
