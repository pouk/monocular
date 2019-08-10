# `type-shape`

> Type for shapes representation

## Usage

```js
const { Point, Line, Rectangle } = require('@monocular/type-shape')

const a = Point(3, 2)
const b = Point(6, 2)
const c = Point(6, 4)
const d = Point(3, 4)

const ab = Line(a, b)
const ac = Line(a, c)

const abcd = Rectangle(a, b, c, d)
```
