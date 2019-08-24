const R = require('ramda')

const Point = require('@monocular/types-point')

const create = require('./create')

const origin = Point.create(0, 0)

function createBase (size) {
  return create(origin, size)
}

module.exports = R.curry(createBase)
