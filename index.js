'use strict'
const stack = require('callsite')
const chalk = require('chalk')
const pipe = require('./transports/' + process.env.LOG_TRANSPORT)
const event = require('./events/' + process.env.EVENT_TRACKING)
const namespaces = process.env.LOG_NAMESPACE || ''

let disabled = []
let enabled = []

namespaces.split(',').forEach(function (name) {
  if (name.split('')[0] === '-') {
    disabled.push(name.substring(1))
  } else {
    enabled.push(name)
  }
})

function isEnabled (namespace) {
  if (disabled.indexOf(namespace) > -1) {
    return false
  } else {
    if (namespaces.split(',').indexOf('*') > -1) {
      return true
    } else if (enabled.indexOf('namespace') > -1) {
      return true
    }
  }
}

exports = module.exports = (namespace) => {
  if (!isEnabled(namespace)) {
    let log = () => {}
    log.assert = () => {}
    log.error = () => {}
    log.info = () => {}
    log.trace = () => {}
    log.warn = () => {}
    log.event = () => {}
    return log
  }

  let log = async(data, ...args) => {
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
    console.info(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.gray('INFO')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, data, ...args)
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

  log.event = async(id, category, action, label, value) => {
    let one = stack()[1]
    console.log(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} ${namespace} ${chalk.white('EVENT')} ${one.getFunctionName() || 'anonymous'} in ${one.getFileName()}:${one.getLineNumber()}\t`, id, category, action, label, value)
    event(id, category, action, label, value)
  }

  return log
}
