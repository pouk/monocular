const R = require('ramda')

const create = require('./create')

/**
 * Bimap
 *
 * @param {Function} f
 * @param {Function} g
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function bimap (f, g, rect) {
  const position = f(rect.position)
  const size = g(rect.size)

  return create(position, size)
}

module.exports = R.curry(bimap)
