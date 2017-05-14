'use strict'

const request = require('request')
const GA_TRACKING_ID = process.env.GA_TRACKING_ID

exports = module.exports = async(id, category, action, label, value) => {
  const data = {
    v: '1', // API Version.
    tid: GA_TRACKING_ID, // Tracking ID / Property ID.
    cid: id, // Anonymous Client Identifier. Ideally, this should be a UUID that is associated with particular user, device, or browser instance.
    t: 'event', // Event hit type.
    ec: category, // Event category.
    ea: action, // Event action.
    el: label, // Event label.
    ev: value // Event value.
  }

  request.post(
    'http://www.google-analytics.com/collect', {
      form: data
    },
    (err, response) => {
      if (err) {
        console.error(err)
      }
      if (response.statusCode !== 200) {
        console.error(new Error('Tracking failed'))
      }
    }
  )
}
