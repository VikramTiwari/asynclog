'use strict'

function Errors (initConfiguration) {
  if (!(this instanceof Errors)) {
    return new Errors(initConfiguration)
  }
  this.report = function (message) {
    // do something
  }
}

exports = module.exports = Errors
