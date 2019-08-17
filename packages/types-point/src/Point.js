const Daggy = require('daggy')

/**
 * Type constructor for a point on a plane
 *
 * @constructor
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @returns {Point}
 */

const Point = Daggy.tagged('Point', ['x', 'y'])

//

module.exports = Point
