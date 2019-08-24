const R = require('ramda')

const create = require('./create')

/**
 * Scale rectangle by given coefficient from (0, 0) point
 *
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromBase (k, rect) {
  const position = rect.position.map(l => l * k)
  const size = rect.size.scale(k)

  return create(position, size)
}

module.exports = R.curry(scaleFromBase)
