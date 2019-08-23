const map = require('./Measure.Distance2.map')

const inverseOf = n => 0 - n

function invert (d2) {
  return map(inverseOf, d2)
}

module.exports = invert
