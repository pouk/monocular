const R = require('ramda')

const create = require('./create')

/**
 * Scale from given point as pivot
 *
 * @param {Point} pivot
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFrom (pivot, k, rect) {
  const delta = pivot
    .distanceTo(rect.position)
    .scale(k)
  const position = pivot.translateBy(delta)
  const size = rect.size.scale(k)

  return create(position, size)
}

module.exports = R.curry(scaleFrom)
