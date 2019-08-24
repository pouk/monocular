const R = require('ramda')

/**
 * Compare points for equality
 *
 * @param {Point} p
 * @param {Point} q
 *
 * @returns {Boolean}
 */

function equals (p, q) {
  return p.x === q.x && p.y === q.y
}

module.exports = R.curry(equals)
