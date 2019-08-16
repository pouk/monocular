const Point = require('./Point')

const create = require('./create')
const equals = require('./equals')
const map = require('./map')
const translate = require('./translate')

// assign static methods

Object.assign(Point, {
  create,
  equals,
  map,
  translate
})

// extend prototype

Point.prototype.equals = function (that) {
  return equals(this, that)
}

Point.prototype.map = function (fn) {
  return map(fn, this)
}

Point.prototype.translate = function (dx, dy) {
  return translate(dx, dy, this)
}

// Export constructor

module.exports = Point
