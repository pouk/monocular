const Point = require('@monocular/types-point')

const scaleFrom = require('./scaleFrom')

/**
 * Denote (0, 0) point
 */

const origin = Point(0, 0)

/**
 * Scale rectangle by given coefficient from (0, 0) point
 *
 * @param {Number} k
 * @param {Rectangle} rect
 *
 * @returns {Rectangle}
 */

module.exports = scaleFrom(origin)
