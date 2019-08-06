const Point = require('@monocular/type-point')

const Rectangle = require('./rectangle')

function hasIntersection (A, B) {
  return !(B.left > A.right ||
           B.right < A.left ||
           B.top > A.bottom ||
           B.bottom < A.top)
}

function intersectionOf (A, B) {
  if (!hasIntersection(A, B)) {
    return void 0
  }

  const top = Math.max(A.top, B.top)
  const left = Math.max(A.left, B.left)
  const bottom = Math.min(A.bottom, B.bottom)
  const right = Math.min(A.right, B.right)

  // makes not to care about disjoint type result
  if (top === bottom || left === right) {
    return void 0
  }

  return Rectangle(Point(top, left), Point(bottom, right))
}

module.exports = {
  hasIntersection,
  intersectionOf
}
