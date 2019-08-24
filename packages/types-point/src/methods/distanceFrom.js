const distanceTo = require('./distanceTo')

/**
 * Get the distance from point
 *
 * @param {Point} p
 * @param {Point} q
 *
 * @returns {Measure.Distance2}
 */

function distanceFrom (q, p) {
  return distanceTo(q, p).invert()
}

module.exports = distanceFrom
