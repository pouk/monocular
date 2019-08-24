const R = require('ramda')

const { Distance2 } = require('@monocular/types-measure')

/**
 * Get the distance between points
 *
 * @param {Point} p
 * @param {Point} q
 *
 * @returns {Measure.Distance2}
 */

function distanceTo (q, p) {
  const dx = q.x - p.x
  const dy = q.y - p.y

  return Distance2(dx, dy)
}

module.exports = R.curry(distanceTo)
