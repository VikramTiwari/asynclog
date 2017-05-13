const stack = require('callsite')

function log(msg) {
  var zero = stack()[1]
  console.log('\033[36m%s\033[90m in %s:%d\033[0m'
      , zero.getFunctionName() || 'anonymous'
      , zero.getFileName()
      , zero.getLineNumber(), '\t', msg)
}

module.exports = log
