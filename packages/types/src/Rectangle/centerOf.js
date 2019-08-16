/**
 * Get center
 *
 * @param {Rectangle} rect
 *
 * @returns {Point}
 */

function centerOf (rect) {
  const dx = rect.width / 2
  const dy = rect.height / 2

  return rect.origin
    .translate(dx, dy)
}

module.exports = centerOf
