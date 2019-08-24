const R = require('ramda')

/**
 * Get center
 *
 * @param {Rectangle} rect
 *
 * @returns {Point}
 */

function centerOf (rect) {
  const { size, position } = rect

  return position.translateBy(size.scale(1 / 2))
}

module.exports = R.curry(centerOf)
