const R = require('ramda')

const { Distance2 } = require('./Measure')

function create (...args) {
  return Distance2(...args)
}

module.exports = R.curry(create)
