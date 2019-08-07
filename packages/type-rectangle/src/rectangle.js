const Point = require('@monocular/type-point')

function Rectangle (a, c) {
  if (!(this instanceof Rectangle)) {
    return new Rectangle(a, c)
  }

  const { x: left, y: top } = a
  const { x: right, y: bottom } = c

  const b = Point(right, top)
  const d = Point(left, bottom)

  const width = right - left
  const height = bottom - top

  const spec = {
    a,
    b,
    c,
    d,
    top,
    left,
    bottom,
    right,
    width,
    height
  }

  return Object.assign(this, spec)
}

module.exports = Rectangle
