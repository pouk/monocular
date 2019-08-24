const Rectangle = require('../Rectangle')

/**
 * Create a `Rectangle` instance
 *
 * @param {Point} position
 * @param {Measure.Distance2} size
 *
 * @returns {Rectangle}
 */

function create (position, size) {
  return Rectangle(position, size)
}

module.exports = create
