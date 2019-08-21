const Distance = require('./Distance')

const methods = require('./methods')

// extend prototype

Distance.prototype.equals = function (that) {
  return methods.equals(that, this)
}

Distance.prototype.map = function (fn) {
  return methods.map(fn, this)
}

Distance.prototype.translate = function (dx, dy) {
  return methods.translate(dx, dy, this)
}

// Export constructor with assigned static methods

module.exports = Object.assign(Distance, methods)
