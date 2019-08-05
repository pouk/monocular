const RBush = require('rbush')

const { intersection } = require('rectangles')

const intersectionOf = A => B => {
  const convert = ({ minX: x1, minY: y1, maxX: x2, maxY: y2 }) => {
    return { x1, x2, y1, y2 }
  }

  const recover = ({ x1: minX, y1: minY, x2: maxX, y2: maxY }) => {
    return { minX, minY, maxX, maxY }
  }

  const C = intersection(convert(A), convert(B))

  return recover(C)
}

class Cache {
  constructor () {
    this.index = new RBush()
  }

  insert (rect) {
    return this.index.insert(rect)
  }

  search (area) {
    const { index } = this

    const rects = index.search(area)

    return rects
      .map(intersectionOf(area))
  }
}

module.exports = Cache
