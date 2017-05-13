const stack = require('callsite')

function createLogger (namespace) {
  function log (msg) {
    let one = stack()[1]
    console.log(namespace, `${one.getFunctionName() || 'anonymous'} at ${one.getFileName()}:${one.getLineNumber()}\t`, msg)
  }
  return log
}

exports = module.exports = createLogger
