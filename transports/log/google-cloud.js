'use strict'

const Logging = require('@google-cloud/logging')
const projectId = process.env.GCLOUD_PROJECT
const loggingClient = Logging({
  projectId: projectId
})

const levels = {
  'log': 'debug',
  'error': 'error',
  'info': 'info',
  'warn': 'warning'
}

const metadata = {
  resource: {
    type: 'global' // for simplicity, make it configurable
  }
}

exports = module.exports = {
  write: async(name, level, data) => {
    const log = loggingClient.log(name)
    const entry = log.entry(metadata, data)
    log[levels[level]](entry).then(() => {
      // do nothing
    }).catch((err) => {
      console.trace(err)
    })
  }
}
