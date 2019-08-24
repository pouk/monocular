const translateTo = require('./translateTo')

/**
 * Translate rectangle center to given point
 *
 * @param {Point} point
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translateCenterTo (point, rect) {
  const { x: dx, y: dy } = rect.size
    .invert()
    .scale(1 / 2)

  const position = point.translate(dx, dy)

  return translateTo(position, rect)
}

module.exports = translateCenterTo
