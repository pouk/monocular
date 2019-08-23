const map = require('./Measure.Distance2.map')

function scale (k, d) {
  return map(n => n * k, d)
}

module.exports = scale
