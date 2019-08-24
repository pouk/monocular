const R = require('ramda')

const { Distance } = require('./Measure')

function create (...args) {
  return Distance(...args)
}

module.exports = R.curry(create)
