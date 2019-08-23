const create = require('./Measure.Distance.create.js')

function map (fn, d) {
  const x = fn(d.x)
  return create(x)
}

module.exports = map
