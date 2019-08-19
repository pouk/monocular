import { Point } from '@monocular/types'

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

const cssPositionOfRect = rect => {
  const { x, y } = rect.origin

  return {
    top: `${y}px`,
    left: `${x}px`
  }
}

const cssSizeOfRect = rect => {
  const { width, height } = rect

  return {
    width: `${width}px`,
    height: `${height}px`
  }
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
  cssPositionOfRect,
  cssSizeOfRect,
  onMouseMoveGlobal
}
