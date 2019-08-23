const { taggedSum } = require('daggy')

const Measure = taggedSum('Measure', {
  Distance: ['x'],
  Distance2: ['x', 'y']
})

module.exports = Measure
