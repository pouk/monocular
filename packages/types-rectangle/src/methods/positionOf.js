const R = require('ramda')

/**
 * Get base position of rectangle
 *
 * @param {Rectangle} rect
 *
 * @returns {Point}
 */

function positionOf (rect) {
  return rect.position
}

module.exports = R.curry(positionOf)
