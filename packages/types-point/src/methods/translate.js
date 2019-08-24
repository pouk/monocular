const create = require('./create')

/**
 * Translate point
 *
 * @param {Number} dx
 * @param {Number} dy
 * @param {Point} point
 *
 * @returns {Point}
 */

function translate (dx, dy, point) {
  return create(point.x + dx, point.y + dy)
}

module.exports = translate
