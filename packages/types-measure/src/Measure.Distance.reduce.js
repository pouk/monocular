const R = require('ramda')

function reduce (fn, acc, d) {
  return fn(acc, d.x)
}

module.exports = R.curry(reduce)
