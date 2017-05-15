'use strict'

const log1 = require('./index')('myApp')
const log2 = require('./index')('yourApp')

function hello () {
  log1('Logging made', 'easy,', 'useful', 'and scalable.')
  log1.warn('Not all problems are solved.')
  log1.info('And we are actively working to solve them.')
  log1.error('Issues:', 'https://github.com/VikramTiwari/asynclog/issues')
  log1.trace('Include stacktraces, they make it easier to debug.')
  log1.event(0, 'Category', 'Action', 'Label', 0)
}

hello()

function hello2 () {
  log2('Logging made', 'easy,', 'useful', 'and scalable.')
  log2.warn('Not all problems are solved.')
  log2.info('And we are actively working to solve them.')
  log2.error('Issues:', 'https://github.com/VikramTiwari/asynclog/issues')
  log2.trace('Include stacktraces, they make it easier to debug.')
  log2.event(0, 'Category', 'Action', 'Label', 0)
}

hello2()
