const R = require('ramda')

const Point = require('@monocular/types-point')
const { Distance2 } = require('@monocular/types-measure')

const create = require('./create')

/**
 * Create by parameters
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 *
 * @returns {Rectangle}
 */

function createSpread (x, y, width, height) {
  const position = Point(x, y)
  const size = Distance2(width, height)

  return create(position, size)
}

module.exports = R.curry(createSpread)
