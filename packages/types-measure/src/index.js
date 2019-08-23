const Measure = require('./Measure')

const Distance = require('./Measure.Distance')
const Distance2 = require('./Measure.Distance2')

//

Measure.prototype.equals = function (m) {
  return this.cata({
    Distance: () => Distance.equals(m, this),
    Distance2: () => Distance2.equals(m, this)
  })
}

Measure.prototype.map = function (fn) {
  return this.cata({
    Distance: () => Distance.map(fn, this),
    Distance2: () => Distance2.map(fn, this)
  })
}

Measure.prototype.concat = function (m) {
  return this.cata({
    Distance: () => Distance.concat(m, this),
    Distance2: () => Distance2.concat(m, this)
  })
}

//

module.exports = Measure
module.exports.Distance = Distance
module.exports.Distance2 = Distance2
