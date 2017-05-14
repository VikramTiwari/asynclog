const log = require('../index.js')('myApp')

log('Logging made', 'easy,', 'useful', 'and scalable.')
log.warn('Not all problems are solved.')
log.info('And we are actively working to solve them.')
log.error('Issues:', 'https://github.com/VikramTiwari/asynclog/issues')
log.trace('Include stacktraces, they make it easier to debug.')
