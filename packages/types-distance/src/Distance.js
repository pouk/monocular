const Daggy = require('daggy')

/**
 * Sum type constructor for a 1- or 2- dimensional distance
 *
 * @constructor
 *
 * @returns {Distance}
 */

const Distance = Daggy.taggedSum('Distance', {
  Distance: ['x'],
  Distance2: ['x', 'y']
})

//

module.exports = Distance
