/**
 * Compare rectangles for equality
 *
 * @param {Rectangle} a
 * @param {Rectangle} b
 *
 * @returns {Boolean}
 */

function equals (a, b) {
  return a.position.equals(b.position) && a.size.equals(b.size)
}

module.exports = equals
