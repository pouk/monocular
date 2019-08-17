const create = require('./create')

/**
 * Translate point
 *
 * @param {Number} dx
 * @param {Number} dy
 *
 * @returns {Point}
 */

function translate (dx, dy, p) {
  return create(p.x + dx, p.y + dy)
}

module.exports = translate
