const R = require('ramda')

const create = require('./Measure.Distance.create')

function concat (d2, d1) {
  const x = d1.x + d2.x
  return create(x)
}

module.exports = R.curry(concat)
