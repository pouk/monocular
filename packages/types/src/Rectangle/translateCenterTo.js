const Point = require('../Point')

const translateTo = require('./translateTo')

/**
 * Translate rectangle center to given point
 *
 * @param {Point} p
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translateCenterTo (p, rect) {
  const dx = rect.width / 2
  const dy = rect.height / 2
  const origin = Point.translate(-dx, -dy, p)

  return translateTo(origin, rect)
}

module.exports = translateCenterTo
