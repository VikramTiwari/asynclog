# asynclog

Logging made easy, useful and scalable

[![Build Status](https://travis-ci.org/VikramTiwari/asynclog.svg?branch=master)](https://travis-ci.org/VikramTiwari/asynclog) [![NPM Version](https://img.shields.io/npm/v/asynclog.svg)](https://www.npmjs.com/package/asynclog) [![NPM Download](https://img.shields.io/npm/dm/asynclog.svg)](https://www.npmjs.com/package/asynclog) [![Greenkeeper badge](https://badges.greenkeeper.io/VikramTiwari/asynclog.svg)](https://greenkeeper.io/)

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
  log.event(0, 'Category', 'Action', 'Label', 0)
}

hello()
```

- Enable logging namespace while running program

``` bash
ASYNCLOG_NAMESPACE=* node example.js
```

[Logs Image]

## External log providers

- Google Cloud

``` bash
# Set ENV variables before running project
LOG_TRANSPORT=google-cloud
GCLOUD_PROJECT=ivikramtiwari # use your project id
```

## Event Tracking

- Google Analytics

``` bash
# Set ENV variables before running project
EVENT_TRACKING=google-analytics
GA_TRACKING_ID=UA-20640332-8 # use your tracking id
```

## Error Reporting

- Google Cloud - Stackdriver Error Reporting

``` bash
# Set ENV variables before running project
ERROR_TRANSPORT=google-cloud
ERROR_TRANSPORT_CONFIG={"projectId":"ivikramtiwari","ignoreEnvironmentCheck":false,"logLevel":2} # replace with your own config
```

## Environment Variables

| ENV Variable | Possible Value | Usage |
|------|----------------|-------|
| ASYNCLOG_NAMESPACE | * | see all logs |
| | myNamespace | log for myNamespace |
| | -myNamespace | don't log myNamespace |
| LOG_TRANSPORT | `google-cloud` | stream logs to google cloud logging |
| GCLOUD_PROJECT | your-project-id | required if `google-cloud` was selected as LGO_TRANSPORT |
| EVENT_TRACKING | `google-analytics` | stream event to google analytics |
| GA_TRACKING_ID | UA-12345678-9 | required if `google-analytics` was selected as EVENT_TRACKING |
| ERROR_TRANSPORT | `google-cloud` | stream errors to google cloud's stackdriver error logging |
| ERROR_TRANSPORT_CONFIG | `{"projectId":"ivikramtiwari","ignoreEnvironmentCheck":false,"logLevel":2}` | required if `google-cloud` was selected as ERROR_TRANSPORT |


## Credits

### Developer: [👨‍💻 Vikram Tiwari](https://vikramtiwari.com)

If you found this library helpful, or learned something from it and want to thank me, consider [buying me a cup of ☕️.](https://www.paypal.me/vikramtiwari/5)
