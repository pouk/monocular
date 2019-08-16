const Point = require('../Point')

/**
 * Compare rectangles for equality
 *
 * @param {Rectangle} a
 * @param {Rectangle} b
 *
 * @returns {Boolean}
 */

function equals (a, b) {
  return Point.equals(a.origin, b.origin) &&
    a.width === b.width &&
    a.height === b.height
}

module.exports = equals
