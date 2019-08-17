const Point = require('../Point')

const create = require('./create')

/**
 * Scale rectangle by given coefficient from (0, 0) point
 *
 * @param {Number} n
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromCenter (n, rect) {
  const width = rect.width * n
  const height = rect.height * n
  const origin = Point.map(m => m * n, rect.origin)

  return create(origin, width, height)
}

module.exports = scaleFromCenter
