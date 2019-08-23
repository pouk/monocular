const { Distance } = require('./Measure')

function create (...args) {
  return Distance(...args)
}

module.exports = create
