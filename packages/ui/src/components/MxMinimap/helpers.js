import { Point, Measure } from '@monocular/types'

const cssFrom = input => {
  if (Point.is(input)) {
    return {
      top: `${input.y}px`,
      left: `${input.x}px`
    }
  }

  if (Measure.Distance2.is(input)) {
    return {
      width: `${input.x}px`,
      height: `${input.y}px`
    }
  }

  throw new TypeError('Not supported type')
}

export {
  cssFrom
}
