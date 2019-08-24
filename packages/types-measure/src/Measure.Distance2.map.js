const R = require('ramda')

const create = require('./Measure.Distance2.create.js')

function map (fn, d) {
  const x = fn(d.x)
  const y = fn(d.y)

  return create(x, y)
}

module.exports = R.curry(map)
