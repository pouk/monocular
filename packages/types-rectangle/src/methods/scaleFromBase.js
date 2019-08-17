const create = require('./create')

/**
 * Scale rectangle by given coefficient from (0, 0) point
 *
 * @param {Number} n
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromCenter (n, rect) {
  const width = rect.width * n
  const height = rect.height * n
  const origin = rect.origin.map(l => l * n)

  return create(origin, width, height)
}

module.exports = scaleFromCenter
