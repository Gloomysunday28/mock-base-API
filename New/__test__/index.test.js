const DiYNew = require('../index')

describe('', () => {
  test('test interator new', () => {
    const parent = function() {}
    parent.prototype.a = 3
    const child = DiYNew(parent)
    expect(child.a).toBe(3)
  })
})