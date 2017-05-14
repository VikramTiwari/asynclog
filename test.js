import test from 'ava'

const log = require('./index')('tests')

test('log', t => {
  log('This is a simple log.')
  t.pass()
})

test('assert', t => {
  log.assert(true, 'This will not print because assertion is true.')
  t.pass()
})

test('error', t => {
  log.error('This is an error log.')
  t.pass()
})

test('info', t => {
  log.info('This is an info log.')
  t.pass()
})

test('trace', t => {
  log.trace('This is a trace log.')
  t.pass()
})

test('warn', t => {
  log.warn('This is a warning log.')
  t.pass()
})

test.todo('Add more tests')
