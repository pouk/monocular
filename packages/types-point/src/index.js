const Point = require('./Point')

const methods = require('./methods')

// extend prototype

Point.prototype.equals = function (that) {
  return methods.equals(that, this)
}

Point.prototype.map = function (fn) {
  return methods.map(fn, this)
}

Point.prototype.translate = function (dx, dy) {
  return methods.translate(dx, dy, this)
}

Point.prototype.translateBy = function (delta) {
  return methods.translateBy(delta, this)
}

Point.prototype.distanceTo = function (point) {
  return methods.distanceTo(point, this)
}

Point.prototype.distanceFrom = function (point) {
  return methods.distanceFrom(point, this)
}

// Export constructor with assigned static methods

module.exports = Object.assign(Point, methods)
