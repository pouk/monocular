const Rectangle = require('./Rectangle')

const methods = require('./methods')

// extend prototype

Rectangle.prototype.equals = function (rect) {
  return methods.equals(rect, this)
}

Rectangle.prototype.isSimilar = function (rect) {
  return methods.isSimilar(rect, this)
}

Rectangle.prototype.translate = function (dx, dy) {
  return methods.translate(dx, dy, this)
}

Rectangle.prototype.translateTo = function (point) {
  return methods.translateTo(point, this)
}

Rectangle.prototype.translateCenterTo = function (point) {
  return methods.translateCenterTo(point, this)
}

Rectangle.prototype.scale = function (n) {
  return methods.scale(n, this)
}

Rectangle.prototype.scaleFromCenter = function (n) {
  return methods.scaleFromCenter(n, this)
}

Rectangle.prototype.scaleFromBase = function (n) {
  return methods.scaleFromBase(n, this)
}

Rectangle.prototype.getCenter = function () {
  return methods.centerOf(this)
}

Rectangle.prototype.alignCenterWith = function (rect) {
  return methods.alignCenterWith(rect, this)
}

Rectangle.prototype.getPosition = function () {
  return methods.positionOf(this)
}

// expose type class extended w/ static methods

module.exports = Object.assign(Rectangle, methods)
