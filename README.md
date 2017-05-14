# asynclog

Logging made easy, useful and scalable

[![Build Status](https://travis-ci.org/VikramTiwari/asynclog.svg?branch=master)](https://travis-ci.org/VikramTiwari/asynclog) [![NPM Version](https://img.shields.io/npm/v/asynclog.svg)](https://www.npmjs.com/package/asynclog) [![NPM Download](https://img.shields.io/npm/dm/asynclog.svg)](https://www.npmjs.com/package/asynclog)

## Features

- Easy to use
- External transport
- Event tracking

## How to use

- Include package in your project

``` sh
npm install --save asynclog
# or, if you are using yarn
yarn add asynclog
```

- Start using

``` javascript
const log = require('asynclog')('myApp')

function hello () {
  log('Logging made', 'easy,', 'useful', 'and scalable.')
  log.warn('Not all problems are solved.')
  log.info('And we are actively working to solve them.')
  log.error('Issues:', 'https://github.com/VikramTiwari/asynclog/issues')
  log.trace('Include stacktraces, they make it easier to debug.')
  log.event(0, 'Category', 'Action', 'Label', 'Value')
}

hello()
```

[Logs Image]

## External log providers

- Google Cloud

``` bash
# Set ENV variables before running project
LOG_TRANSPORT=google-cloud
GCLOUD_PROJECT_ID=ivikramtiwari # use your project id
```

## Event Tracking

- Google Analytics

``` bash
# Set ENV variables before running project
EVENT_TRACKING=google-analytics
GA_TRACKING_ID=UA-20640332-8 # use your tracking id
```

## Credits

### Developer: [ 👨‍💻 Vikram Tiwari](https://vikramtiwari.com)

If you found this library helpful, or learned something from it and want to thank me, consider [buying me a cup of ☕️.](https://www.paypal.me/vikramtiwari/5)
