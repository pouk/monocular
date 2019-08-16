const create = require('./create')

/**
 * Scale rectangle by given coefficient
 *
 * @param {Number} n
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scale (n, rect) {
  const { origin, width, height } = rect
  return create(origin, width * n, height * n)
}

module.exports = scale
