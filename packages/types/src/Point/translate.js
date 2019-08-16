const Point = require('./Point')

/**
 * Translate point
 *
 * @param {Number} dx
 * @param {Number} dy
 *
 * @returns {Point}
 */

function translate (dx, dy, p) {
  return Point(p.x + dx, p.y + dy)
}

module.exports = translate
