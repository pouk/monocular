/**
 * Get center
 *
 * @param {Rectangle} rect
 *
 * @returns {Point}
 */

function centerOf (rect) {
  const { size, position } = rect

  const { x: dx, y: dy } = size.scale(1 / 2)

  return position.translate(dx, dy)
}

module.exports = centerOf
