import { Point, Measure } from '@monocular/types'

const positionOfElement = el => {
  const { x, y } = el.getBoundingClientRect()
  return Point.create(x, y)
}

const relativePointTo = (el2, el1) => {
  const a = el1.getBoundingClientRect()
  const b = el2.getBoundingClientRect()

  return Point
    .create(a.x, a.y)
    .translate(-b.x, -b.y)
}

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

const onMouseMoveGlobal = callback => {
  const tearDown = () => {
    window.removeEventListener('mousemove', callback)
    window.removeEventListener('mouseup', tearDown)
  }

  window.addEventListener('mousemove', callback)
  window.addEventListener('mouseup', tearDown)
}

export {
  positionOfElement,
  relativePointTo,
  cssFrom,
  onMouseMoveGlobal
}
