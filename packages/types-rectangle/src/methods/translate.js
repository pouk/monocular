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
  const origin = rect.origin.translate(dx, dy)
  return translateTo(origin, rect)
}

module.exports = translate
