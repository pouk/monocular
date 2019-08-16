const Point = require('./Point')

/**
 * Derive new point transforming coordinates by given function
 *
 * @param {Function} f
 * @param {Point} p
 *
 * @returns {Point}
 */

function map (f, p) {
  return Point(f(p.x), f(p.y))
}

module.exports = map
