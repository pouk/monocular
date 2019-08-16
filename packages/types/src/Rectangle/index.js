const Rectangle = require('./Rectangle')

const create = require('./create')
const createBase = require('./createBase')
const baseFrom = require('./baseFrom')
const equals = require('./equals')
const isSimilar = require('./isSimilar')
const translate = require('./translate')
const translateTo = require('./translateTo')
const translateCenterTo = require('./translateCenterTo')
const scale = require('./scale')
const scaleFromCenter = require('./scaleFromCenter')
const scaleFromBase = require('./scaleFromBase')

Object.assign(Rectangle, {
  create,
  createBase,
  baseFrom,
  equals,
  isSimilar,
  translate,
  translateTo,
  translateCenterTo,
  scale,
  scaleFromCenter,
  scaleFromBase
})

// extend prototype

Rectangle.prototype.equals = function (rect) {
  return equals(rect, this)
}

Rectangle.prototype.isSimilar = function (rect) {
  return isSimilar(rect, this)
}

Rectangle.prototype.translate = function (dx, dy) {
  return translate(dx, dy, this)
}

Rectangle.prototype.translateTo = function (point) {
  return translateTo(point, this)
}

Rectangle.prototype.translateCenterTo = function (point) {
  return translateCenterTo(point, this)
}

Rectangle.prototype.scale = function (n) {
  return scale(n, this)
}

Rectangle.prototype.scaleFromCenter = function (n) {
  return scaleFromCenter(n, this)
}

Rectangle.prototype.scaleFromBase = function (n) {
  return scaleFromBase(n, this)
}

// expose type class

module.exports = Rectangle
