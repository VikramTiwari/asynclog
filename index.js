const stack = require('callsite')
const chalk = require('chalk')

function createLogger (namespace) {
  var log = function (data, ...args) {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.green('LOG')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  log.error = function (data, ...args) {
    let one = stack()[1]
    console.error(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.red('ERROR')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  log.trace = function (data, ...args) {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.yellow('TRACE')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
    stack().forEach(function (site) {
      console.log(`  ${chalk.blue(site.getFunctionName() || 'anonymous')} in ${site.getFileName()}:${site.getLineNumber()}`)
    })
  }
  return log
}

exports = module.exports = createLogger
