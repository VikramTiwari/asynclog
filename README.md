# asynclog

Logging made easy, useful and scalable

[![Build Status](https://travis-ci.org/VikramTiwari/asynclog.svg?branch=master)](https://travis-ci.org/VikramTiwari/asynclog) [![NPM Version](https://img.shields.io/npm/v/asynclog.svg)](https://www.npmjs.com/package/asynclog) [![NPM Download](https://img.shields.io/npm/dm/asynclog.svg)](https://www.npmjs.com/package/asynclog)

## Features

- Easy to use

## How to use

- Include package in your project

``` sh
npm install --save asynclog
# or, if you are using yarn
yarn add asynclog
```

- Start using

``` javascript
const log = require('../index.js')('myApp')

log('Logging made', 'easy,', 'useful', 'and scalable.')
log.warn('Not all problems are solved.')
log.info('And we are actively working to solve them.')
log.error('Issues:', 'https://github.com/VikramTiwari/asynclog/issues')
log.trace('Include stacktraces, they make it easier to debug.')

```

[Logs Image]

## Credits

### Developer: [ 👨‍💻 Vikram Tiwari](https://vikramtiwari.com)

If you found this library helpful, or learned something from it and want to thank me, consider [buying me a cup of ☕️.](https://www.paypal.me/vikramtiwari/5)
