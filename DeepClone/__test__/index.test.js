const deep_clone = require('../index')

describe('', () => {
  test('clone complete', () => {
    const obj = {
      a: {
        b: 2
      },
      c: 3,
      d: {
        e: {
          f: 5
        },
        g: 6
      }
    }

    expect(deep_clone(obj)).toEqual(obj)
  })
  
  test('clone Deeply', () => {
    const obj = {
      a: {
        b: 2
      },
      c: 3,
      d: {
        e: {
          f: 5
        },
        g: 6
      }
    }

    expect(deep_clone(obj)).not.toBe(obj)
  })
})
