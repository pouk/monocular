const Rectangle = require('./Rectangle')

/**
 * Create a `Rectangle` instance
 *
 * @param {Point} origin
 * @param {Number} width
 * @param {Number} height
 *
 * @returns {Point}
 */

function create (origin, width, height) {
  return Rectangle(origin, width, height)
}

module.exports = create
