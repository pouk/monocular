const R = require('ramda')

const translate = require('./translate')

/**
 * Translate point
 *
 * @param {Measure.Distance2} delta
 * @param {Point} point
 *
 * @returns {Point}
 */

function translateBy (delta, point) {
  return translate(delta.x, delta.y, point)
}

module.exports = R.curry(translateBy)
