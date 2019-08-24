const R = require('ramda')

const translateTo = require('./translateTo')

/**
 * Translate rectangle position by given distances
 *
 * @param {Number} dx
 * @param {Number} dy
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translate (dx, dy, rect) {
  const position = rect.position.translate(dx, dy)

  return translateTo(position, rect)
}

module.exports = R.curry(translate)
