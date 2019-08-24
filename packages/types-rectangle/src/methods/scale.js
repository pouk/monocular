const R = require('ramda')

const create = require('./create')

/**
 * Scale rectangle by given coefficient
 *
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scale (k, rect) {
  const size = rect.size.scale(k)

  return create(rect.position, size)
}

module.exports = R.curry(scale)
