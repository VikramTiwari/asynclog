const stack = require('callsite')
const chalk = require('chalk')

function createLogger (namespace) {
  var log = function (data, ...args) {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.green('LOG')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  log.assert = function (value, data, ...args) {
    let one = stack()[1]
    console.assert(value, `${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.red('ERROR')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  // implement console.dir

  log.error = function (data, ...args) {
    let one = stack()[1]
    console.error(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.red('ERROR')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  log.info = function (data, ...args) {
    let one = stack()[1]
    console.info(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.white('INFO')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  log.trace = function (message, ...args) {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.cyan('TRACE')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, message, ...args)
    stack().forEach(function (site) {
      console.log(`  ${chalk.blue(site.getFunctionName() || 'anonymous')} in ${site.getFileName()}:${site.getLineNumber()}`)
    })
  }

  log.warn = function (data, ...args) {
    let one = stack()[1]
    console.warn(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.yellow('WARN')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }
  return log
}

exports = module.exports = createLogger
