const Point = require('../Point')

const create = require('./create')

/**
 * Scale rectangle by given coefficient from center
 *
 * @param {Number} n
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromCenter (n, rect) {
  const width = rect.width * n
  const height = rect.height * n

  const dx = (rect.width - width) / 2
  const dy = (rect.height - height) / 2
  const origin = Point.translate(dx, dy, rect.origin)

  return create(origin, width, height)
}

module.exports = scaleFromCenter
