const Point = require('../Point')

const create = require('./create')

const origin = Point(0, 0)

function createBase (width, height) {
  return create(origin, width, height)
}

module.exports = createBase
