const R = require('ramda')
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

Shape.prototype.equals = function (other) {
  const unknownCase = () => {
    const summary = `type ${this._name} can not be compated to type ${other._name}`
    throw new TypeError(summary)
  }

  return this.case({
    Point: (x1, y1) => {
      return other.case({
        Point: (x2, y2) => x1 === x2 && y1 === y2,
        _: unknownCase
      })
    },
    Line: (a1, b1) => {
      return other.case({
        Line: (a2, b2) => a1.equals(a2) && b1.equals(b2),
        _: unknownCase
      })
    },
    Rectangle: (a1, b1, c1, d1) => {
      return other.case({
        Rectangle: (a2, b2, c2, d2) => {
          return a1.equals(a2) &&
            b1.equals(b2) &&
            c1.equals(c2) &&
            d1.equals(d2)
        }
      })
    }
  })
}

Shape.prototype.map = function (fn) {
  const ctor = Shape[this._name]
  const args = R.map(fn, [...this])

  return ctor(...args)
}

module.exports = Shape
