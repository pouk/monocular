const Point = require('./Point')

/**
 * Create a `Point` instance
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @returns {Point}
 */

function create (x, y) {
  return Point(x, y)
}

module.exports = create
