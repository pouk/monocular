const Point = require('@monocular/types-point')

const create = require('./create')

const origin = Point.create(0, 0)

function createBase (width, height) {
  return create(origin, width, height)
}

module.exports = createBase
