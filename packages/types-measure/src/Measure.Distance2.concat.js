const create = require('./Measure.Distance2.create')

function concat (d2, d1) {
  const x = d1.x + d2.x
  const y = d1.y + d2.y

  return create(x, y)
}

module.exports = concat
