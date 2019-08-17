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
  const dx = rect.width / 2
  const dy = rect.height / 2
  const origin = point.translate(-dx, -dy)

  return translateTo(origin, rect)
}

module.exports = translateCenterTo
