const create = require('./create')

/**
 * Translate rectangle to given point
 *
 * @param {Point} position
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translateTo (position, rect) {
  return create(position, rect.size)
}

module.exports = translateTo
