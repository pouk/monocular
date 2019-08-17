/**
 * Compare rectangles for equality
 *
 * @param {Rectangle} a
 * @param {Rectangle} b
 *
 * @returns {Boolean}
 */

function equals (a, b) {
  return a.origin.equals(b.origin) &&
    a.width === b.width &&
    a.height === b.height
}

module.exports = equals
