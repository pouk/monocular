const Rectangle = require('./Rectangle')

const methods = require('./methods')

// extend prototype

Rectangle.prototype.equals = function (rect) {
  return methods.equals(rect, this)
}

Rectangle.prototype.bimap = function (f, g) {
  return methods.bimap(f, g, this)
}

Rectangle.prototype.translate = function (dx, dy) {
  return methods.translate(dx, dy, this)
}

Rectangle.prototype.translateBy = function (delta) {
  return methods.translateBy(delta, this)
}

Rectangle.prototype.translateTo = function (point) {
  return methods.translateTo(point, this)
}

Rectangle.prototype.translateCenterTo = function (point) {
  return methods.translateCenterTo(point, this)
}

Rectangle.prototype.scale = function (k) {
  return methods.scale(k, this)
}

Rectangle.prototype.scaleFrom = function (pivot, k) {
  return methods.scaleFrom(pivot, k, this)
}

Rectangle.prototype.scaleFromCenter = function (k) {
  return methods.scaleFromCenter(k, this)
}

Rectangle.prototype.scaleFromOrigin = function (k) {
  return methods.scaleFromOrigin(k, this)
}

Rectangle.prototype.alignCenterWith = function (rect) {
  return methods.alignCenterWith(rect, this)
}

Rectangle.prototype.getPosition = function () {
  return methods.positionOf(this)
}

Rectangle.prototype.getCenter = function () {
  return methods.centerOf(this)
}

Rectangle.prototype.getSize = function () {
  return methods.sizeOf(this)
}

Rectangle.prototype.getWidth = function () {
  return methods.widthOf(this)
}

Rectangle.prototype.getHeight = function () {
  return methods.heightOf(this)
}

// expose type class extended w/ static methods

module.exports = Object.assign(Rectangle, methods)
