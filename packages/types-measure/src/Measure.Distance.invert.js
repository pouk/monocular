const map = require('./Measure.Distance.map')

const inverseOf = n => 0 - n

function invert (d) {
  return map(inverseOf, d)
}

module.exports = invert
