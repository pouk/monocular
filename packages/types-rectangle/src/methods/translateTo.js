const create = require('./create')

/**
 * Translate rectangle to given point
 *
 * @param {Point} p
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translateTo (p, rect) {
  return create(p, rect.width, rect.height)
}

module.exports = translateTo
