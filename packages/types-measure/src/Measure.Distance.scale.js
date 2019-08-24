const R = require('ramda')

const map = require('./Measure.Distance.map')

function scale (k, d) {
  return map(n => n * k, d)
}

module.exports = R.curry(scale)
