const R = require('ramda')

const scaleFrom = require('./scaleFrom')
const centerOf = require('./centerOf')

/**
 * Scale rectangle by given coefficient from center
 *
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromCenter (k, rect) {
  const center = centerOf(rect)

  return scaleFrom(center, k, rect)
}

module.exports = R.curry(scaleFromCenter)
