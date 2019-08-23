const { Distance } = require('./Measure')

module.exports = Distance

module.exports.create = require('./Measure.Distance.create')
module.exports.equals = require('./Measure.Distance.equals')
module.exports.map = require('./Measure.Distance.map')
module.exports.concat = require('./Measure.Distance.concat')
module.exports.empty = require('./Measure.Distance.empty')
