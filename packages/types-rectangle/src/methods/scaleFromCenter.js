const R = require('ramda')

const scale = require('./scale')
const alignCenterWith = require('./alignCenterWith')

/**
 * Scale rectangle by given coefficient from center
 *
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function scaleFromCenter (k, rect) {
  const r1 = scale(k, rect)
  return alignCenterWith(rect, r1)
}

module.exports = R.curry(scaleFromCenter)
