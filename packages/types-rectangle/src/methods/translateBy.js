const R = require('ramda')

const create = require('./create')

/**
 * Translate position by given distance
 *
 * @param {Measure.Distance2} delta
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

function translateBy (delta, rect) {
  const position = rect.position.translateBy(delta)

  return create(position, rect.size)
}

// expose curried

module.exports = R.curry(translateBy)
