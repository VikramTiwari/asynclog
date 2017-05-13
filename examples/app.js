const log = require('../index.js')('zion')

function logger (msg, error, code) {
  log(msg)
  log.error(error, code)
  log.trace(msg)
}

logger({
  matrix: 'There is no spoon!'
}, 'agents', 'neo')
