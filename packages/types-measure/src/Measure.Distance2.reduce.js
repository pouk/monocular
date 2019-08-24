const R = require('ramda')

function reduce (fn, acc, d) {
  return R.reduce(fn, acc, [d.x, d.y])
}

module.exports = R.curry(reduce)
