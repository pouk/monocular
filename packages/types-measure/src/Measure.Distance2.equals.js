const R = require('ramda')

function equals (d2, d1) {
  return d1.x === d2.x && d1.y === d2.y
}

module.exports = R.curry(equals)
