const Point = require('../Point')

const translateTo = require('./translateTo')

/**
 * Translate rectangle by given distances
 *
 * @param {Number} dx
 * @param {Number} dy
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translate (dx, dy, rect) {
  const origin = Point.translate(dx, dy, rect.origin)
  return translateTo(origin, rect)
}

module.exports = translate
