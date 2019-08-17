const create = require('./create')

/**
 * Derive new point transforming coordinates by given function
 *
 * @param {Function} f
 * @param {Point} p
 *
 * @returns {Point}
 */

function map (f, p) {
  return create(f(p.x), f(p.y))
}

module.exports = map
