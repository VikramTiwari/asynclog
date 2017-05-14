'use strict'
const stack = require('callsite')
const chalk = require('chalk')
const pipe = require('./transports/' + process.env.LOG_TRANSPORT)

exports = module.exports = (namespace) => {
  var log = async(data, ...args) => {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.green('LOG')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
    pipe.write(namespace, 'log', {
      function_name: one.getFunctionName() || 'anonymous',
      file_name: one.getFileName(),
      line_number: one.getLineNumber(),
      message: data,
      data: args
    })
  }

  log.assert = async(value, data, ...args) => {
    let one = stack()[1]
    console.assert(value, `${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.red('ERROR')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
  }

  // TODO: implement console.dir

  log.error = async(data, ...args) => {
    let one = stack()[1]
    console.error(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.red('ERROR')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
    pipe.write(namespace, 'error', {
      function_name: one.getFunctionName() || 'anonymous',
      file_name: one.getFileName(),
      line_number: one.getLineNumber(),
      message: data,
      data: args
    })
  }

  log.info = async(data, ...args) => {
    let one = stack()[1]
    console.info(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.white('INFO')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
    pipe.write(namespace, 'info', {
      function_name: one.getFunctionName() || 'anonymous',
      file_name: one.getFileName(),
      line_number: one.getLineNumber(),
      message: data,
      data: args
    })
  }

  log.trace = async(message, ...args) => {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.cyan('TRACE')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, message, ...args)
    stack().forEach(function (site) {
      console.log(`  ${chalk.blue(site.getFunctionName() || 'anonymous')} in ${site.getFileName()}:${site.getLineNumber()}`)
    })
  }

  log.warn = async(data, ...args) => {
    let one = stack()[1]
    console.warn(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.yellow('WARN')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
    pipe.write(namespace, 'warn', {
      function_name: one.getFunctionName() || 'anonymous',
      file_name: one.getFileName(),
      line_number: one.getLineNumber(),
      message: data,
      data: args
    })
  }

  return log
}
