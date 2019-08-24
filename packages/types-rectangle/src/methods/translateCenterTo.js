const R = require('ramda')

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
  const delta = rect.size
    .scale(1 / 2)
    .invert()

  const position = point.translateBy(delta)

  return translateTo(position, rect)
}

module.exports = R.curry(translateCenterTo)
