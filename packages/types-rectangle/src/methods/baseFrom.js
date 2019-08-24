const R = require('ramda')

const createBase = require('./createBase')

function baseFrom (spec) {
  return createBase(spec.width, spec.height)
}

module.exports = R.curry(baseFrom)
