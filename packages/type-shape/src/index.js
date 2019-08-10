const Type = require('@monocular/union-type')

const PointSpec = {
  x: Number,
  y: Number
}

const isNumber = n => typeof n === 'number'

function isPointSpec ({ x, y }) {
  return isNumber(x) && isNumber(y)
}

const LineSpec = {
  a: isPointSpec,
  b: isPointSpec
}

const RectangeSpec = {
  a: isPointSpec,
  b: isPointSpec,
  c: isPointSpec,
  d: isPointSpec
}

const Shape = Type({
  Point: PointSpec,
  Line: LineSpec,
  Rectangle: RectangeSpec
})

module.exports = Shape
