const R = require('ramda')

const centerOf = require('./centerOf')
const translateCenterTo = require('./translateCenterTo')

/**
 * Translate so center aligns with second rect
 *
 * @param {Rectangle} r1
 * @param {Rectangle} r2
 *
 * @returns {Rectangle}
 */

function alignCenterWith (r2, r1) {
  return translateCenterTo(centerOf(r2), r1)
}

module.exports = R.curry(alignCenterWith)
